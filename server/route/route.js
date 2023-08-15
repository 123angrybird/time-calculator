
const express = require('express');
const routes = express.Router();
const calculateTime = require("../feature/calculateTime");
const home = require("../feature/featuresList");

routes.get("/", home.featureList)
routes.get("/calculate_time/", calculateTime.calculateTime);

module.exports = routes;
