require("dotenv").config();

const express = require("express");
require("./config/hbs.config")

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));


const routes = require("./config/routes.config");
app.use("/", routes);

app.listen(3000, () =>
  console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊")
);
