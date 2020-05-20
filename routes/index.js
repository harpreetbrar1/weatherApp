"use strict"
const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.mainPage);

//Handles the request of getting city information from client.
router.get('/sendCityData', indexController.sendCityData)

module.exports = router;
