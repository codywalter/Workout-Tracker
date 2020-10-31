// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// SETS UP EXPRESS
const PORT = process.env.PORT || 4000;
const app = express();

// const db = require("models");

app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db Mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// ROUTES
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// SERVER STARTS LISTENING
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
