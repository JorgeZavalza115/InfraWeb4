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
  res.render('index')
  //res.send("Welcome to my API-Infraestructura de Desarrollo Web");
});

app.get("/Alumnos/Ingresar", (req, res) => {
  res.render('insertar',)
  //res.sendFile(__dirname + '/html/insertar.html');
});
app.get("/Alumnos/Editar/:id", async (req, res) => {
  const alumno = await Alumnos.findById(req.params.id)
  console.log(alumno)

  res.render('editar', {alumno})
  //res.sendFile(__dirname + '/html/editar.html');
});

// Editar
app.post('/Alumnos/Editar/Guardar', (req, res) => {
  const idAlumno = req.body.id
  console.log(idAlumno)

  Alumnos.findByIdAndUpdate(idAlumno, {
    nombre: req.body.nombre,
    noctrl: req.body.noctrl,
    semestre: req.body.semestre,
    carrera: req.body.carrera,
    'kardex.planest': req.body.planest,
    'kardex.especialidad': req.body.planest
  }, (error, alumno) => {
    console.log(error, idAlumno)
    res.redirect('/Alumnos/Mostrar')
  })
})

app.get("/Alumnos/Mostrar", async (req, res) => {
  const alumnos = await Alumnos.find({})
  //console.log(alumnos)
  res.render('mostrar', {alumnos})
  //res.sendFile(__dirname + '/html/mostrar.html');
});

//Borrar
app.get("/Alumnos/Borrar/:id", async (req, res) => {
  const alumno = await Alumnos.findById(req.params.id)
  console.log(alumno)

  res.render('borrar', {alumno})
  //res.sendFile(__dirname + '/html/editar.html');
});

app.post('/Alumnos/borrar', (req, res) => {
  const idAlumno = req.body.id
  console.log(idAlumno)

  Alumnos.findByIdAndRemove(idAlumno, function(err){
    if(err){
      res.send(err);
    }else{
      res.redirect('/Alumnos/Mostrar')
    }
  })

})

app.get("/kardex", async (req, res) => {
  const alumnos = await Alumnos.find({nombre:'JORGE ZAVALZA ARROYO'})
  console.log(alumnos)
  //res.sendFile(__dirname + '/html/kardex.html', {alumnos});
  res.render('Kardex', {alumnos})
})

app.post('/Alumnos/Ingresar/Guardar', (req, res) => {
  Alumnos.create(req.body, (error, alumno) => {
    res.redirect('/Alumnos/Mostrar')
  })
})
// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to-Infra Web enero 2022", port));