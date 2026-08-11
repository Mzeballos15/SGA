// const alumnos = [
//     {
//         id: 1,
//         nombre: "Ana"
//     },
//     {
//         id: 2,
//         nombre: "Jose"
//     }
// ];
// function obtenerAlumnos(){
//     return new Promise ((resolve) =>{
//         setTimeout(() => {
//            resolve(alumnos) 
//         }, 2000);
//     })
// }
// async function iniciar(){
//     const datos = await obtenerAlumnos()
//     console.table(datos)
// }
// iniciar()

// //CREAR OBTENERMATERIAS()
// // CREAR OBTENERDOCENTES()
// // MOSTRAR LOS DATOS A TRAVES DE ASYNC/AWAIT

// const materias = [
//     {
//         id: 1,
//         materia: "Matemáticas"
//     },
//     {
//         id: 2,
//         materia: "Programación"
//     }
// ];

// function obtenerMaterias(){
//     return new Promise ((resolve) =>{
//         setTimeout(() => {
//            resolve(materias) 
//         }, 2000);
//     })
// }
// async function mostrarMaterias(){
//     const materia = await obtenerMaterias()
//     console.table(materia)
// }
// mostrarMaterias()

// //DOCENTES
// const docentes = [
//     {
//         id: 1,
//         materia: "Juan Peréz"
//     },
//     {
//         id: 2,
//         materia: "Ana Flores"
//     }
// ];

// function obtenerDocentes(){
//     return new Promise ((resolve) =>{
//         setTimeout(() => {
//            resolve(docentes) 
//         }, 2000);
//     })
// }
// async function mostrarDocentes(){
//     const docente = await obtenerDocentes()
//     console.table(docente)
// }
// mostrarDocentes()


// async function obtenerAlumnos(){
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
//     const alumnos = await respuesta.json()
//    // console.table(alumnos)
//    return alumnos;
// }
// obtenerAlumnos()

// function mostrarAlumnos(alumnos){
//    // console.table(alumnos)
//    console.log(typeof alumnos)
//    localStorage.setItem("alumnos", JSON.stringify(alumnos))
//    const datos = localStorage.getItem("alumnos")
//    console.log(typeof datos)
//    console.log(datos)
//    const recuperarAlumnos = JSON.parse(datos)
//    console.log(typeof recuperarAlumnos)
//    console.table(recuperarAlumnos)


//     //console.log(alumnos)
//     // for (const alumno of alumnos){
//     //     console.log(alumno.name)
//     // }
// }

// async function iniciar(){
//     const alumnos = await obtenerAlumnos()
//     mostrarAlumnos(alumnos);
// }
// iniciar();

const formulario = document.querySelector("#formAlumno")


formulario.addEventListener("submit", function(event){
    event.preventDefault();

const nombre = document.querySelector("#nombre").value
const carrera = document.querySelector("#carrera").value
const correo = document.querySelector("#correo").value

 const alumno ={
    id: Date.now(),
    nombre: nombre,
    carrera: carrera,
    correo: correo
 }
  const alumnos = obtenerAlumnos()
  alumnos.push(alumno)

  localStorage.setItem("alumnos", JSON.stringify(alumnos))

  mostrarAlumnos(alumnos)

  formulario.reset()

});

function obtenerAlumnos(){
    const datos = localStorage.getItem("alumnos")
    if (datos){
        return JSON.parse(datos)
    }
    return[]
}

const listaAlumnos = document.querySelector("#listaAlumnos")

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <li>
        ${alumno.nombre} -
        ${alumno.carrera} -
        ${alumno.correo}
        </li>`;
    }
}



