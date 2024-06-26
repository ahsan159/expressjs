const express = require("express");
const { stat } = require("fs");
const path = require("path");
const hbs = require("hbs");
const app = express();
const cors = require("cors");
// import data from json files
const kings = require("./kings.json");
// const movies = require("./movies.json");
// const flights = require("./flights.json");
const medicines = require("./medicines.json");
const bodyParser = require("body-parser");
const port = 8000;

// https://github.com/vega/vega/blob/main/docs/data/flights-5k.json

const staticPath = path.join(__dirname, "./source_code/jsToDo");
const partialsPath = path.join(__dirname, "partials");
app.use(cors({ origin: true })); // enable origin cors   It is required for post method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get("/", cors({ "Access-Control-Allow-Origin": "*" }), (req, res) => {
  res.send("hi this is reply from 8000");
});

app.get("/temp", (req, res) => {
  console.log(req.query);
  // console.log(data);
  // res.send({ name: "ahsan", age: "36" });
  if (!(req.query.index > kings.length) && !(req.query.index < 0)) {
    // res.send(kings);
    let arrayToSend = [];
    kings.map((val, ind) => {
      if (val.start >= req.query.start) {
        arrayToSend.push(val);
      }
    });
    res.send(arrayToSend);
  } else {
    res.send({ status: "incorrect" });
  }
});

app.get("/api/medicines", (req, res) => {
  console.log("iamget");
  console.log(`query is ${res.query}`);
  let arrayToSend = [];
  medicines.map((val) => {
    arrayToSend.push(val);
  });
  res.send(arrayToSend);
});

app.post(
  "/create",
  cors({ "Access-Control-Allow-Origin": "*" }),
  (req, res) => {
    console.log("I am at post");
    console.log(req.body);
    res.send({ message: "Sucess" });
  }
);

app.post("/api/medicines", (req, res) => {
  console.log(req.body);
  res.send({ message: "success" });
});

app.delete("/api/medicines", (req, res) => {
  console.log("body");
  console.log(req.body);
  res.send({ message: "delete in Progress" });
});

app.put("/api/medicines/:id", (req, res) => {
  console.log("iamput");
  console.log(req.originalUrl);
  console.log(`Body: ${req.body}`);
  console.log(req.body);
  console.log("\n");
  res.send({ message: "success" });
});

app.get("/api/logout", (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  res.send({ status: "true", message: "logour successful", date: [] });
});

app.post("/api/login", (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  res.send({ message: "allOK" });
});
