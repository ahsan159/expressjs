const express = require("express");
const { stat } = require("fs");
const path = require("path");
const hbs = require("hbs");
const app = express();
const cors = require('cors');
// import data from json files
const kings = require("./kings.json");
const movies = require("./movies.json");
const flights = require("./flights.json");
const port = 8000;

// https://github.com/vega/vega/blob/main/docs/data/flights-5k.json

const staticPath = path.join(__dirname, "./source_code/jsToDo");
const partialsPath = path.join(__dirname, "partials");
// app.use(express.static(staticPath));
app.set("view engine", "hbs");
// app.use(cors);
hbs.registerPartials(partialsPath);

app.listen(port, () => {
  console.log(`hi listening from the port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index", {
    myName: "ahsan",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", cors({'Access-Control-Allow-Origin':'*'}),(req, res) => {
  res.send("hi this is reply from 8000");
});

app.get("/temp",cors({'Access-Control-Allow-Origin':'*'}), (req, res) => {
  console.log(req.query);
  // console.log(data);
  // res.send({ name: "ahsan", age: "36" });
  if (!(req.query.index > kings.length) && !(req.query.index < 0)) {
    // res.send(kings[req.query.index]);    
    res.send(kings);
  } else {
    res.send({ status: "incorrect" });
  }
});
