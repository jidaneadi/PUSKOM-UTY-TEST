const express = require('express');
const router = express.Router();
const brandsControllers = require('../controllers/brandscontrollers/brandscontrollers');

router.get("/", brandsControllers.ShowBrand);

module.exports = router;