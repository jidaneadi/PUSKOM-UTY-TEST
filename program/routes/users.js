const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/userscontrollers/userscontrollers')
router.post("/", usersControllers.Register);
router.post("/auth", usersControllers.Login);
module.exports = router;
