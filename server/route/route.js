
const express = require('express');
const routes = express.Router();
const feature = require("../feature/calculateTime");

routes.get("/calculate_time/", feature.calculateTime);

module.exports = routes;
