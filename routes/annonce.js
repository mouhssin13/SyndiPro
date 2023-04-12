const express = require('express');
const annonceController = require('../controllers/annonce.controller');
const router = express.Router();

router.post("/create",annonceController.create);
router.get("/:id",annonceController.getAnnonceByID);
router.get("/",annonceController.fetchAll);
router.delete("/:id" , annonceController.destroy);
router.patch("/:id" , annonceController.update);

module.exports = router;