const express = require("express");
const path = require("path");
const routes = require("./server/route/route");

require("dotenv").config();
const host = process.env.HOST;
const port = process.env.PORT;

app = express();
app.use(express.static(path.join(__dirname, "/server/view/featureList.html")));

app.use(routes);

app.listen(port, ()=> console.log(`Server is listening at ${port}`));
