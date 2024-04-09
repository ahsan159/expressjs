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
  res.write("This is line one");
  res.write(" this is line two");
  res.send(); // if you donot write this line in multiline site will keep waiting for end of response
});

// send json object
app.get("/temp", (req, res) => {
  res.send({
    id: 1,
    name: "ahsan",
    temp: 22.3,
    max: 24.3,
    min: 12.1,
    unit: "C",
  });
});

// this res.json function stringify any data as json like undefined or null values;
app.get("/undefined", (req, res) => {
    res.json(`this is ` + Number(0/0));
});
