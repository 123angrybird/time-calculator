const express = require("express");
const routes = require("./server/route/route");

require("dotenv").config();
const host = process.env.HOST;
const port = process.env.PORT;

app = express();

app.use(routes);

