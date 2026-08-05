const alumnos = [
    {
        id: 1,
        nombre: "Ana"
    },
    {
        id: 2,
        nombre: "Jose"
    }
];
function obtenerAlumnos(){
    return new Promise ((resolve) =>{
        setTimeout(() => {
           resolve(alumnos) 
        }, 2000);
    })
}
async function iniciar(){
    const datos = await obtenerAlumnos()
    console.table(datos)
}
iniciar()

//CREAR OBTENERMATERIAS()
// CREAR OBTENERDOCENTES()
// MOSTRAR LOS DATOS A TRAVES DE ASYNC/AWAIT

const materias = [
    {
        id: 1,
        materia: "Matemáticas"
    },
    {
        id: 2,
        materia: "Programación"
    }
];

function obtenerMaterias(){
    return new Promise ((resolve) =>{
        setTimeout(() => {
           resolve(materias) 
        }, 2000);
    })
}
async function mostrarMaterias(){
    const materia = await obtenerMaterias()
    console.table(materia)
}
mostrarMaterias()

//DOCENTES
const docentes = [
    {
        id: 1,
        materia: "Juan Peréz"
    },
    {
        id: 2,
        materia: "Ana Flores"
    }
];

function obtenerDocentes(){
    return new Promise ((resolve) =>{
        setTimeout(() => {
           resolve(docentes) 
        }, 2000);
    })
}
async function mostrarDocentes(){
    const docente = await obtenerDocentes()
    console.table(docente)
}
mostrarDocentes()