const dayjs = require("dayjs");
const express = require("express");
const app = express();
// let currentDate = Date.now();

// app.get(route,callback)
// route = homepage or just page we are require data from
// callback is require and response objects

// response callback
app.get("/", (req, res) => {
  res.send("hello from the thappa");
});

// create about page at server side
app.get("/about", (req, res) => {
  res.send(
    "Page created by ahsan saddique on " + dayjs(Date.now()).format("HH:mm:ss")
  );
});

app.get("/contact", (req, res) => {
  res.send("Contact Lab at 4042024");
});

app.get("/temp", (req, res) => {
  res.send("temperature api is not activated and configured currently");
});

// listen from website
app.listen(8000, () => {
  console.log("hello world form the express");
});
