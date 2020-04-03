const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postRoutes = require("./routes/posts");

const app = express();

mongoose
  .connect("connection string for a mongoDB Atlas cluster")
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.use(bodyParser.json());

//making image folder accessible with express
app.use("/images", express.static(path.join("server/images")));

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, PUT, OPTIONS"
  );
  next();
});

app.use("/api/posts", postRoutes);
module.exports = app;
