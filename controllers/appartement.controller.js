const models = require('../models');

function create(req, res) {

    models.User.findOne({ where: { nom: req.body.owner } }).then(result => {
        if (result) {
            const app = {
                num_app: req.body.num_app,
                type: req.body.type,
                etage: req.body.etage,
                montantM: req.body.montantM,
                immeuble: req.body.immeuble,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image
            }
            models.appartement.create(app).then(resulta => {
                res.status(201).json({
                    message: "appartement well created",
                    app: resulta
                });
            }).catch(error => {
                res.status(500).json({
                    message: "something wrong",
                    error: error
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}

function fetchAll(req, res) {
    const immeuble = req.params.immeuble;
    models.appartement.findAll({ where: { immeuble: immeuble } }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}


function fetchAllByPro(req, res) {
    const proprie = req.params.proprie;
    const immeuble = req.params.immeuble;
    models.appartement.findAll({ where: { immeuble: immeuble, proprie: proprie } }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function getApp(req, res) {
    const num_app = req.params.num_app;
    const immeuble = req.params.immeuble;

    models.appartement.findAll({ where: { num_app: num_app, immeuble: immeuble } }).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Appartement not found!"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "something wrong"
        })
    });
}


function destroy(req, res) {
    const id = req.params.id;

    models.appartement.destroy({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Appartement deleted successfully"
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
    getApp: getApp,
    destroy: destroy,
    fetchAll: fetchAll,
    fetchAllByPro: fetchAllByPro
}