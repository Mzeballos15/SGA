// server conecta
const express =require("express")
const app = express()
app.use(express.json()) 
const alumnosRoutes = require("./routes/alumnos.routes")
app.use("/alumnos", alumnosRoutes)
const conectarDB = require("./config/database")
require("dotenv").config()
const PORT = process.env.PORT //busca en el archivo env una variable llamada PORT

conectarDB()


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

app.listen(PORT, () =>{
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
})

