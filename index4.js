import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to process both inputs

// function bandNameGenerator(req, res, next) {
//   console.log(req.body);
//   bandName = req.body["street"] + req.body["pet"];
//   next();
// }

// app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  bandName = req.body["street"] + req.body["pet"]; //This is same which we are doing with middleware, like this also works.
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
