var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes");
var usersRouter = require("./routes/users");

var app = express();

var corsOptions = {
    origin: "http://localhost:3001/",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", cors(corsOptions), usersRouter);

module.exports = app;
