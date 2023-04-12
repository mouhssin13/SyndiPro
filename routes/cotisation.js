const express = require('express');
const cotisationController = require('../controllers/cotisation.controller');
const router = express.Router();

router.post("/create",cotisationController.create);
router.get("/",cotisationController.fetchAll);
router.get("/mine/:ownerID",cotisationController.fetchByProp);
router.delete("/:id" , cotisationController.destroy);


module.exports = router;