//esta carpeta crea un modelo  es el encargado de buscar las cosas de la bdd, maneja las herramientas necesarias para que la informacion llegue a destino
const mongoose = require("mongoose")

const alumnoSchema = new mongoose.Schema({ //muestro como es el esquema 
    legajo: Number,
    nombre: String,
    carrera: String,
    correo: String
})

const Alumno = mongoose.model("Alumno", alumnoSchema)

module.exports= Alumno