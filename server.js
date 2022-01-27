// Casillas, González, Robles y Zavalza - Servicios Escolares
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

var bodyParser = require('body-parser');
const userRoute = require("./src/routes/Materias"); 
const userRoute2 = require("./src/routes/Alumnos");
const Alumnos = require("./src/models/Alumnos");

// settings
const { config, engine } = require('express-edge');
const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middlewares
app.use(express.json());
app.use("/api", userRoute);

app.use(express.json());
app.use("/api", userRoute2);
app.use(engine);
app.set('views', `${__dirname}/views`);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API-Infraestructura de Desarrollo Web");
});

app.get("/kardex", async (req, res) => {
  const alumnos = await Alumnos.find({})
  console.log(alumnos)
  //res.sendFile(__dirname + '/html/kardex.html', {alumnos});
  res.render('Kardex', {alumnos})
})

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to-Infra Web enero 2022", port));