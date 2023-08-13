const express = require("express");
const Time = require("./server/class/time.js")

require("dotenv").config();
const host = process.env.HOST;
const port = process.env.PORT;

app = express();

var current_time = new Time(22,0,"24-hour clock")


console.log(current_time.subtract(10000));


// app.get("/", function(req, res) {
//     res.send("adsaadad");
// })
//app.listen(port, host, ()=> console.log(`Server is listening at ${host}:${port}`));
