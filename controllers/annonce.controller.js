const models = require('../models');

function create(req,res){
        const annonce = {
            description: req.body.description,
            file: req.body.file,
            date: req.body.date,
            userId: req.body.userId,
        }
        models.annonce.create(annonce).then(result => {
            res.status(201).json({
                message: "annonce well created",
                annonce: result
            });
        }).catch(error =>{
            res.status(500).json({
                message: "something wrong",
                error: error
            });
        });
}

function getAnnonceByID(req,res){
    const id = req.params.id;

    models.annonce.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Annonce not found!"
            }) 
        }
    }).catch(error =>{
        res.status(500).json({
            message: "something wrong"
        })
    });
}


function fetchAll(req,res){
    models.annonce.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function destroy(req,res){
    const id = req.params.id;

    models.annonce.destroy({where : {id:id}}).then(result => {
        res.status(200).json({
            message: "annonce deleted successfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function update(req,res){
    const id = req.params.id;
    const updatedAnnonce = {
        description: req.body.description,
        file: req.body.file,
        date: req.body.date,   
    }
    models.annonce.update(updatedAnnonce, {where : {id:id}})
    .then(result => {
        res.status(200).json({
            message : "Annonce updates !",
            annonce : updatedAnnonce
        });
    }).catch(error => {
        res.status(500).json({
            message : "something wrong !",
            error : error
        });
    });
}

module.exports = {
    create:create,
    getAnnonceByID:getAnnonceByID,
    fetchAll:fetchAll,
    destroy:destroy,
    update:update,

}
    