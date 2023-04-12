const express = require('express');
const PMController = require('../controllers/paimentMensuel.controller');
const router = express.Router();

router.post("/create",PMController.create);
router.get("/all/:immeuble",PMController.fetchAll);
router.get("/mine/:ownerID",PMController.getByPro);
router.delete("/:num_app",PMController.destroy);
router.patch("/:id",PMController.update);



module.exports = router;