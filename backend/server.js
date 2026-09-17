// server conecta
const express =require("express")  // Importamos express para poder crear el servidor de la API
const app = express()  // Creamos una instancia de express para poder usar sus funcionalidades
const cors = require("cors") // Importamos cors para poder permitir el acceso a la API desde otros dominios
app.use(express.json()) // Middleware para poder recibir datos en formato JSON en las peticiones de la API
app.use(cors()) // Middleware para permitir el acceso a la API desde otros dominios
const alumnosRoutes = require("./routes/alumnos.routes") // Importamos las rutas de alumnos para poder usarlas en el servidor
app.use("/alumnos", alumnosRoutes)
const conectarDB = require("./config/database") // Importamos la función conectarDB para poder conectarnos a la base de datos
require("dotenv").config() // Importamos dotenv para poder usar las variables de entorno definidas en el archivo .env
const PORT = process.env.PORT // Definimos el puerto en el que se ejecutará el servidor, tomando el valor de la variable de entorno PORT definida en el archivo .env



conectarDB() // Llamamos a la función conectarDB para conectarnos a la base de datos



// Creo un middleware
app.use((req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    next()
})



const docentes = [
    {
        id:1,
        nombre: "Rosa",
        materia: "Programación"
    },
    {
        id:2,
        nombre: "Pedro",
        materia: "Sistemas" 
    },
    {
        id:3,
        nombre: "Juan",
        materia: "Base de Datos" 
    },
    {
        id:4,
        nombre: "Maria",
        materia: "Matemática" 
    },
    {
        id:5,
        nombre: "Rocio",
        materia: "Inglés" 
    },
]

app.get("/docentes", (req, res) => {
    res.json(docentes)
})

app.get("/docentes/:id", (req, res) =>{
    const id = Number(req.params.id)
    const docente = docentes.find(a => a.id === id)
    res.json(docente)
})

app.listen(PORT, () =>{ // Iniciamos el servidor en el puerto definido en la variable PORT
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
})

