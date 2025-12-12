//TODO: Set up a server

//imports --> express + cors packages
//use cors to allow our client to send data (cross-origin)
//we also have to import db from dbConnection to use it later
import express from "express";
import cors from "cors";
import { dbPool } from "./dbConnection.js";

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
//route --> "/"
app.get("/", (req, res) => {
  //res.json({message:"Welcome to the server. GET comfy!"}) --> only allows us to send JSON format
  // you can  use send method to send non-JSON, such as HTML instead, in string format:
  res.send("<h1>Welcome to the SERVER</h1> <h2>GET comfy!</h2>");
});

// ==============================

//TODO: Route to READ data from the database (GET)

//route --> "/reviews"
//HTTP method GET (= READ)
app.get("/reviews", async function (req, res) {
  //query the database
  const query = await dbPool.query(
    `SELECT name, location, review, rating FROM chopandnyam;`
  );
  // helps in case server is not working - SERVER CONSOLE LOGS ARE IN THE TERMINAL; NOT THE CLIENT!
  console.log(query);
  //parse the response from this route into JSON and wrangle it to show just the rows property
  res.json(query.rows);
});

//TODO: Route to CREATE data from the database (POST)
//this will need to be tested in POSTMAN! NOT THE CLIENT!
//route --> "/reviews"
//HTTP method POST (= CREATE)

app.post("/reviews", (req, res) => {
  //to receive the data from the client; in the request object - i need the body property - and formValues are part of the body
  const newReview = req.body.formValues;
  console.log(newReview); //do this to see if this is working
  const query = dbPool.query(
    `INSERT INTO chopandnyam (name, location, review, rating) VALUES ($1, $2, $3, $4),
    [newReview.name, newReview.location, newReview.review, newReview.rating]`
  );
  //optional: for our peace of mind we can add a response
  res.json({ status: "success", values: newReview });
});
