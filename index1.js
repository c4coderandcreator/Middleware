//middleware body-parser

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});


app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req,res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});