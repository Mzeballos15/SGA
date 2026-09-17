//este archivo realiza la conexion de la base de datos con nuestro sistema
const mongoose = require("mongoose")

async function conectarBD(){
    try{
         await mongoose.connect(process.env.MONGO_URI) // Usamos el método connect() de mongoose para conectarnos a la base de datos de MongoDB, tomando la URI de conexión de la variable de entorno MONGO_URI definida en el archivo .env
        console.log("Base de datos conectada")
    }catch(error){
        console.log(error)
    }
}

module.exports = conectarBD