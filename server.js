const express = require("express");
const app = express();
const cors = require("cors");
const popular = require("./movie-data");
app.use(cors());

app.get("/popular", function (req, res) {
  res.send(popular);
});

app.listen(4000);
