const express = require("express");
const { stat } = require("fs");
const path = require("path");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "./source_code/jsToDo");
// app.use(express.static(staticPath));
app.set("view engine", "hbs");

app.listen(port, () => {
  console.log(`hi listening from the port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index", {
    myName: "ahsan",
  });
});

app.get("/", (req, res) => {
  res.send("hi this is reply from 8000");
});
