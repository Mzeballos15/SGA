// Routes maneja las rutas de la API, es decir, los endpoints que se pueden acceder desde el frontend para realizar operaciones sobre los alumnos

const express = require("express") // Importamos express para poder crear las rutas de la API
// const alumnosController = require("../controllers/alumnos.controller")
const {verificarToken} = require("../middlewares/authMiddleware") // Importamos el middleware de autenticación para proteger las rutas de la API

const {
    obtenerAlumnos, 
    obtenerAlumno, 
    crearAlumno, 
    actualizarAlumno, 
    eliminarAlumno } = require("../controllers/alumnos.controller")
const router = express.Router() 

router.get("/", verificarToken, obtenerAlumnos) 

router.get("/:id",verificarToken, obtenerAlumno) 

router.post("/", verificarToken, crearAlumno) 

router.put("/:id",verificarToken, actualizarAlumno) 

router.delete("/:id",verificarToken, eliminarAlumno) 

module.exports = router