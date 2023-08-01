import express from "express";
import bodyParser from "body-parser";
import { connect } from "mongoose";
require("dotenv").config();

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
import { mongoURI as db } from "./config/keys.js";
// Connect to MongoDB
connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
const port = process.env.PORT || 5050; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
