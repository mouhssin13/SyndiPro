const express = require('express');
const reclamationController = require('../controllers/reclamation.controller');
const router = express.Router();

router.post("/create",reclamationController.create);
router.get("/",reclamationController.fetchAll);
router.get("/:nom",reclamationController.getByPro);
router.delete("/:id" , reclamationController.destroy);


module.exports = router;