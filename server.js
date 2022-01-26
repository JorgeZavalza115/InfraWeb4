// Casillas, González, Robles y Zavalza - Servicios Escolares
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./src/routes/Materias"); 
const userRoute2 = require("./src/routes/Alumnos");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

app.use(express.json());
app.use("/api", userRoute2);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API-Infraestructura de Desarrollo Web");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to-Infra Web enero 2022", port));