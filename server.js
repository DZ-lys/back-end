const express = require("express");
const app = express();
const popular = require("./movie-data");
const bodyParser = require("body-parser");

app.use(bodyParser());

let users = [];

const addUser = (userData) => {
  users.push(userData);
  console.log(users);
};

app.post("/user", (req, res) => {
  console.log("body", req.body);
  addUser(req.body);
  res.send("user succesfully added");
});

app.get("/user", (request, response) => {
  response.send(users);
});

app.listen(4000);
