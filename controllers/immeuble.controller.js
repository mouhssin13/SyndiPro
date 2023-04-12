const models = require('../models');

function create(req,res){
    const immeuble = {
        nom_im: req.body.nom_im,
        adresse: req.body.adresse,
        nbr_et: req.body.nbr_et,
        nbr_app: req.body.nbr_app,
        syndic: req.body.syndic
    }
    models.Immeuble.create(immeuble).then(result => {
        res.status(201).json({
            message: "Immeuble well created",
            immeuble: result
        });
    }).catch(error =>{
        res.status(500).json({
            message: "something wrong",
            error: error
        });
    });
}

function getImmeuble(req,res){
    const syndic = req.params.syndic;
    const nom_im = req.params.nom_im;

    models.Immeuble.findOne({where : {syndic:syndic,nom_im:nom_im}}).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Immeuble not found!"
            }) 
        }
    }).catch(error =>{
        res.status(500).json({
            message: "something wrong"
        })
    });
}


function update(req,res){
    const id = req.params.id;
    const updatedImmeuble = {
        nom_im: req.body.nom_im,
        adresse: req.body.adresse,
        nbr_et: req.body.nbr_et,
        nbr_app: req.body.nbr_app,
        syndic: req.body.syndic
    }
    models.Immeuble.update(updatedImmeuble, {where : {id:id}})
    .then(result => {
        res.status(200).json({
            message : "Immeuble updates !",
            immeuble : updatedImmeuble
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
    getImmeuble:getImmeuble,
    update:update,
}