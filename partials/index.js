const express = require("express");
const { stat } = require("fs");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "./source_code/jsToDo");
const partialsPath = path.join(__dirname,"partials");
// app.use(express.static(staticPath));
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.listen(port, () => {
  console.log(`hi listening from the port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index", {
    myName: "ahsan",
  });
});

app.get("/about",(req,res)=>{
  res.render("about");
})

app.get("/", (req, res) => {
  res.send("hi this is reply from 8000");
});
