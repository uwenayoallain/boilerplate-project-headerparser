// server.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

var listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
