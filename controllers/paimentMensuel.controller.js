const models = require('../models');


function create(req, res) {
    models.User.findOne({ where: { nom: req.body.owner } }).then(result => {
        if (result) {
            const pm = {
                num_app: req.body.num_app,
                mois: "janvier",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm2 = {
                num_app: req.body.num_app,
                mois: "février",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm3 = {
                num_app: req.body.num_app,
                mois: "mars",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm4 = {
                num_app: req.body.num_app,
                mois: "avril",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm5 = {
                num_app: req.body.num_app,
                mois: "mai",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm6 = {
                num_app: req.body.num_app,
                mois: "juin",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm7 = {
                num_app: req.body.num_app,
                mois: "juillet",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm8 = {
                num_app: req.body.num_app,
                mois: "aout",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm9 = {
                num_app: req.body.num_app,
                mois: "sepembre",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm10 = {
                num_app: req.body.num_app,
                mois: "octobre",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm11 = {
                num_app: req.body.num_app,
                mois: "novembre",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            const pm12 = {
                num_app: req.body.num_app,
                mois: "décembre",
                montant: req.body.montant,
                statu: req.body.statu,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
                immeuble: req.body.immeuble
            }
            models.paimentMensuel.bulkCreate([pm, pm2, pm3, pm4, pm5, pm6, pm7, pm8, pm9, pm10, pm11, pm12]).then(result => {
                res.status(201).json({
                    message: "PM well created",
                });
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "something wrong",
            error: error
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });

}



function fetchAll(req, res) {
    const immeuble = req.params.immeuble;
    models.paimentMensuel.findAll({ where: { immeuble: immeuble } }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function getByPro(req, res) {
    const ownerID = req.params.ownerID;
    models.paimentMensuel.findAll({ where: { ownerID: ownerID } }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}


function update(req, res) {
    const id = req.params.id;
    const updatedPM = {
        statu: req.body.statu,
    }
    models.paimentMensuel.update(updatedPM, { where: { id: id } })
        .then(result => {
            res.status(200).json({
                message: "paiment mensuel updates !",
            });
        }).catch(error => {
            res.status(500).json({
                message: "something wrong !",
                error: error
            });
        });
}


function destroy(req, res){
    const num_app = req.params.num_app;

    models.paimentMensuel.destroy({ where: { num_app: num_app } }).then(result => {
        res.status(200).json({
            message: "PM deleted successfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

module.exports = {
    create: create,
    fetchAll: fetchAll,
    update: update,
    getByPro: getByPro,
    destroy:destroy,
}