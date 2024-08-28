const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/userscontrollers/userscontrollers')
router.post("/", usersControllers.Register);

module.exports = router;
