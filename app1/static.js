const dayjs = require('dayjs');
const express = require("express");
const app = express();
const path = require('path');
// let currentDate = Date.now();


// built in middleware
console.log(path.join(__dirname,"./source_code/world_scramble_game"));
const staticPath  = path.join(__dirname,"./source_code/world_scramble_game");
app.use(express.static(staticPath))
// above three lines will serve the static website 

// listen from website
app.listen(8000, () => {
  console.log("hello world form the express static");
});

// serve the existing build html project using express 


// response callback
app.get("/", (req, res) => {
  res.send("hello from the static");
});
