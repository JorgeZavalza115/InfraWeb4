// Casillas, González, Robles y Zavalza - Servicios Escolares
const express = require("express");
const userSchema = require("../models/Materias");

const router = express.Router();

// create user
router.post("/Materias", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/Materias", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/Materias/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/Materias/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/Materias/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, clave, SATCA } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { nombre, clave, SATCA } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
