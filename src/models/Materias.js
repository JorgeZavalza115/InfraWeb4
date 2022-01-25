// Casillas, González, Robles y Zavalza - Servicios Escolares
const mongoose = require("mongoose");

const materiaSchema = mongoose.Schema({
    nombre:{
        type : String,
        require:true
    },

    clave: {
        type : String,
        require: true
    },

    SATCA:{
        type : String,
        require :true
    }
    
});

module.exports = mongoose.model('Materias', materiaSchema);