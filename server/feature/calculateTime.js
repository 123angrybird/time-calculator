const Time = require("../class/time.js")

exports.calculateTime = (req, res) => {
    let curHour = Number(req.query.hour);
    let curMinute = Number(req.query.minute);
    let change = Number(req.query.change);
    let type = req.query.type;

    if (curHour && curMinute && change && (type !== null && type !== undefined)) {
        let time = new Time(curHour,curMinute);
        if (type == "add") {
            res.status(200).send(time.add(change));
        } else {
            res.status(200).send(time.subtract(change));
        }

    } else {
        res.status(400).send("Your Inputs are incorrecct!");
    }
}
