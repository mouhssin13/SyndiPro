const models = require('../models');

function create(req, res) {

    models.User.findOne({ where: { nom: req.body.owner } }).then(result => {
        if (result) {
            const cot = {
                intitule: req.body.intitule,
                categorie: req.body.categorie,
                montant: req.body.montant,
                payeP: req.body.payeP,
                owner: req.body.owner,
                ownerID: result.id,
                ownerImage: result.image,
            }
            models.Cotisation.create(cot).then(result => {
                res.status(201).json({
                    message: "cotisation well created",
                    cot: result
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
    models.Cotisation.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}
function fetchByProp(req, res) {
    const ownerID = req.params.ownerID
    models.Cotisation.findAll({ where: { ownerID: ownerID } }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
           error:error
        });
    });
}

function destroy(req, res) {
    const id = req.params.id;

    models.Cotisation.destroy({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Cotisation deleted successfully"
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
    destroy: destroy,
    fetchByProp: fetchByProp,
}