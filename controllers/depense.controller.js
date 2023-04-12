const models = require('../models');

function create(req,res){
    const dep = {
        intitule: req.body.intitule,
        catergorie: req.body.catergorie,
        somme: req.body.somme,
        montant_app: req.body.montant_app,
    }
    models.Depense.create(dep).then(result => {
        res.status(201).json({
            message: "depense well created",
            dep: result
        });
    }).catch(error =>{
        res.status(500).json({
            message: "something wrong",
            error: error
        });
    });
}

function fetchAll(req,res){
    models.Depense.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function destroy(req,res){
    const id = req.params.id;

    models.Depense.destroy({where : {id:id}}).then(result => {
        res.status(200).json({
            message: "Depense deleted successfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}


module.exports = {
    create:create,
    fetchAll:fetchAll,
    destroy:destroy,
}