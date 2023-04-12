const models = require('../models');

function create(req,res){
    const rec = {
        nom: req.body.nom,
        image: req.body.image,
        content: req.body.content
    }
    models.Reclamation.create(rec).then(result => {
        res.status(201).json({
            message: "reclamation sent",
            rec: result
        });
    }).catch(error =>{
        res.status(500).json({
            message: "something wrong",
            error: error
        });
    });
}

function fetchAll(req,res){
    models.Reclamation.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function getByPro(req,res){
    const nom = req.params.nom;
    models.Reclamation.findAll({where : {nom:nom}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function destroy(req,res){
    const id = req.params.id;

    models.Reclamation.destroy({where : {id:id}}).then(result => {
        res.status(200).json({
            message: "Reclamation deleted successfully"
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
    getByPro:getByPro,
}