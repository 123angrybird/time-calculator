const fs = require("fs");
const path = require("path")

exports.featureList = (req, res) => {

    res.sendFile(path.join(__dirname, "/../view/featureList.html"));
}