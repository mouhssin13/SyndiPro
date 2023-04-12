const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();


router.post("/sing-up",userController.singUp);
router.post('/login', userController.login);
router.get('/:id', userController.getuser);
router.patch('/update/:id', userController.update);

module.exports = router;