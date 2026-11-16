const mongoose = require("mongoose") 

const materiaSchema = new mongoose.Schema({  
    codigo: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },

    nombre: {
     type: String,
     required: true,
     trim: true,
     minlength: 3,  //se buscó
     maxlength: 40
    },

    descripcion:{
        type: String,
        trim: true
    },

    cargaHoraria: {
        type: Number,
        required: true,
        min:1 ,  //se buscó
        validate: Number.isInteger //se buscó
    },

    estado: {
        type: String,
        required: true,
        trim: true,
        enum:["activa", "inactiva"]
        
    }
},
{
 versionKey: false
})

const Materia = mongoose.model("Materia", materiaSchema)
 module.exports = Materia