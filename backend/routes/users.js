var express = require("express");
var router = express.Router();

const users = [{ id: 1, name: "Someone", email: "someone@example.com", age: 25 }];

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send(users);
    res.withCredentials = true;
});

/* POST users listing. */
router.post("/", function (req, res, next) {
    users.push(req.body);
    res.send(200);
});

module.exports = router;
