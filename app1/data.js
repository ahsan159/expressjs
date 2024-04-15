// sending json data as response and sending multiline response

const dayjs = require("dayjs");
const express = require("express");
const app = express();

// listen from website
app.listen(8000, () => {
  console.log("hello world form the express data.js");
});

// multiline response
app.get("/", (req, res) => {
  console.log(req);
  console.log("original url:" + req.originalUrl);
  console.log("params:" + req);
  res.write("This is line one");
  res.write(" this is line two");
  res.send(); // if you donot write this line in multiline site will keep waiting for end of response
});

// send json object
app.get("/temp", (req, res) => {
  console.log(req.query);
  // console.log(req);
  console.log(req.query.unit);
  console.log(req.query.city);
  console.log(req.query.id);
  let temp = 100;
  switch (req.query.unit) {
    case "C":
      temp = temp * 1;
      break;
    case "F":
      temp = temp * 1.8 + 32;
      break;
    case "K":
      temp = temp + 273.15;
      break;
    default:
      temp = temp * 1;
  }
  res.send({
    id: 1,
    name: req.query.city,
    temp: temp,
    max: 24.3,
    min: 12.1,
    unit: req.query.unit,
  });
});

// this res.json function stringify any data as json like undefined or null values;
app.get("/undefined", (req, res) => {
  res.json(`this is ` + Number(0 / 0));
});
