// Casillas, González, Robles y Zavalza - Servicios Escolares
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const alumnosSchema = mongoose.Schema({
    nombre:{
        type : String,
        require:true
    },
    noctrl:{
        type : String,
        require:true
    },
    semestre:{
        type : String,
        require:true
    },
    carrera:{
        type : String,
        require:true
    },
    kardex:{
        planest:{
            type : String,
            require:true
        },
        especialidad:{
            type : String,
            require:true
        },
        regsemestre:[
            {
                periodo:{
                    type : String,
                    require:true
                },
                asignatura:[
                    {
                        no:{
                            type : String,
                            require:true
                        },
                        clave:{
                            type : String,
                            require:true
                        },
                        materia:{
                            type : String,
                            require:true
                        },
                        creditos:{
                            type : String,
                            require:true
                        },
                        calificacion:{
                            type : String,
                            require:true
                        },
                        evaluacion:{
                            type : String,
                            require:true
                        },
                        observaciones:{
                            type : String,
                            require:true
                        }
                    }
                ],
                prosemestral:{
                    type : String,
                    require:true
                },
                creditosapr:{
                    type : String,
                    require:true
                }
            }
        ],
        promarit:{
            type : String,
            require : true
        },
        prompond:{
            type : String,
            require : true
        },
        totalcreditos:{
            type : String,
            require : true
        },
        porcenavance:{
            type : String,
            require : true
        }
    }
});

module.exports = mongoose.model('Alumnos', alumnosSchema);