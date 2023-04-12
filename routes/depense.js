const express = require('express');
const depenseController = require('../controllers/depense.controller');
const router = express.Router();

router.post("/create",depenseController.create);
router.get("/",depenseController.fetchAll);
router.delete("/:id" , depenseController.destroy);


module.exports = router;