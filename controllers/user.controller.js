const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');




function singUp(req, res) {
    models.User.findOne({ where: { email: req.body.email } }).then(result => {
        if (result) {
            res.status(409).json({
                message: "Email already exists !",
            });
        } else {
            models.User.findOne({ where: { nom: req.body.nom } }).then( result => {
                if(result){
                    res.status(409).json({
                        message: "Nom already exists !",
                    });
                }else {
                    bcryptjs.genSalt(10, function (err, salt) {
                        bcryptjs.hash(req.body.password, salt, function (err, hash) {
                            const user = {
                                cin: req.body.cin,
                                nom: req.body.nom,
                                image: req.body.image,
                                tel: req.body.tel,
                                immeuble: req.body.immeuble,
                                nbr_app: req.body.nbr_app,
                                isAdmin: req.body.isAdmin,
                                president: req.body.president,
                                vice_president: req.body.vice_president,
                                tresorie: req.body.tresorie,
                                email: req.body.email,
                                password: hash,
                            }
                    
                            models.User.create(user).then(result => {
                                res.status(201).json({
                                    message: "SUCCESS",
                    
                                });
                            }).catch(error => {
                                res.status(500).json({
                                    message: "something wrong",
                                    error: error
                                });
                            });
                        });
                    });
                }
            }
            )   
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}



function login(req, res) {
    models.User.findOne({ where: { nom: req.body.nom } }).then(user => {
        if (user === null) {
            res.status(401).json({
                message: "Invalid credentials!",
            });
        } else {
            bcryptjs.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, 'secret', function (err, token) {
                        res.status(200).json({
                            status: "SUCCESS",
                            message: "Authentication successful!",
                            data: {
                                id: user.id,
                                cin: user.cin,
                                nom: user.nom,
                                tel: user.tel,
                                image: user.image,
                                immeuble: user.immeuble,
                                nbr_app: user.nbr_app,
                                president: user.president,
                                vice_president: user.vice_president,
                                tresorie: user.tresorie,
                                isAdmin: user.isAdmin,
                                email: user.email,
                            },
                            token: token
                        });
                    });
                } else {
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}


function getuser(req, res) {
    const id = req.params.id;

    models.User.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "User not found!"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "something wrong"
        })
    });
}

function update(req, res) {
    const id = req.params.id;
    bcryptjs.genSalt(10, function (err, salt) {
        bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const Updateduser = {
                nom: req.body.nom,
                image: req.body.image,
                tel: req.body.tel,
                nbr_app: req.body.nbr_app,
                president: req.body.president,
                vice_president: req.body.vice_president,
                tresorie: req.body.tresorie,
                password: hash,
            }

            models.User.update(Updateduser, { where: { id: id } }).then(result => {
                res.status(201).json({
                    message: "SUCCESS",

                });
            }).catch(error => {
                res.status(500).json({
                    message: "something wrong",
                    error: error
                });
            });
        });
    });
}

module.exports = {
    singUp: singUp,
    login: login,
    getuser: getuser,
    update: update
}
