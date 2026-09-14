//este archivo realiza la conexion de la base de datos con nuestro sistema
const mongoose = require("mongoose")

async function conectarBD(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Base de datos conectada")
    }catch(error){
        console.log(error)
    }
}

module.exports = conectarBD