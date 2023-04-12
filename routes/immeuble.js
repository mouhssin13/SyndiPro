const express = require('express');
const immeubleController = require('../controllers/immeuble.controller');
const router = express.Router();

router.post("/create",immeubleController.create);
router.get("/:syndic/:nom_im",immeubleController.getImmeuble);
router.patch("/:id" , immeubleController.update);

module.exports = router;