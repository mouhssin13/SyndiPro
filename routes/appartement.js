const express = require('express');
const appController = require('../controllers/appartement.controller');
const router = express.Router();

router.post("/create",appController.create);
router.get("/:num_app/:immeuble",appController.getApp);
router.delete("/:id" , appController.destroy);
router.get("/:immeuble",appController.fetchAll);
router.get("/search/:immeuble/:proprie",appController.fetchAllByPro);


module.exports = router;