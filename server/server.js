//TODO: Set up a server

//imports --> express + cors packages
//use cors to allow our client to send data (cross-origin)
//we also have to import db from dbConnection to use it later
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//remember to store express in a variable --> app
const app = express();

//config cors and express
app.use(cors());
app.use(express.json());

//PORT setup
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is live in port ${PORT}!`);
});

//TODO: READ a welcome message
//ROOT route
app.get("/", (req, res) => {
  //res.json({message:"Welcome to the server. GET comfy!"}) --> only allows us to send JSON format
  // you can  use send method to send non-JSON, such as HTML instead, in string format:
  res.send("<h1>WELCOME TO THE SERVER :)</h1> <h2>GET COMFY BELOVED!</h2>");
});

app.listen(8080, function () {
  console.log("App running on port 8080");
});

// ==============================

//TODO: Route to READ data from the database (GET)

//TODO: Route to CREATE data from the database (POST)
