const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
require("dotenv").config();

// import express from "express";
// import bodyParser from "body-parser";
// import { connect } from "mongoose";
// import passport from "passport";

const { urlencoded, json } = bodyParser;

const app = express();

// Bodyparser middleware
app.use(
  urlencoded({
    extended: false,
  })
);
app.use(json());
// DB Config
const db = require("./config/keys").mongoURI; // Connect to MongoDB

// TODO: configure IP with mongodb atlas
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5050; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
