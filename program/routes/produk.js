const express = require('express');
const router = express.Router();
const produkControllers = require('../controllers/produkcontrollers/produkcontrollers')
router.get("/", produkControllers.ShowProduct);

module.exports = router;
