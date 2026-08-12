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
const mensaje =  document.querySelector("#mensaje")
const listaAlumnos = document.querySelector("#listaAlumnos")
let alumnoEditado


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
  mostrarMensaje("Alumno guardado correctamente")

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

function mostrarMensaje(texto){
    mensaje.textContent= texto;
    setTimeout(() => {
        mensaje.textContent = " ";
    }, 3000);
}


function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <tr>
          <td>${alumno.id}</td>
          <td>${alumno.nombre}</td>
          <td>${alumno.carrera}</td>
          <td>${alumno.correo}</td>
          <td>
             <button class= "btn-editar" data-id="${alumno.id}" >Editar</button>
             <button class= "btn-eliminar" data-id="${alumno.id}">Eliminar</button>
          </td>
        </tr>
        `;
    }
}

function eliminarAlumno(id){
    const alumnos = obtenerAlumnos()
    const alumnosActualizados = alumnos.filter(
        alumno => alumno.id !== id
    );
    localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
    mostrarAlumnos(alumnosActualizados)
    mostrarMensaje("Alumno eliminado correctamente")
}

listaAlumnos.addEventListener("click",(e) =>{
    if(e.target.classList.contains("btn-eliminar")){
        const id = Number(e.target.dataset.id)
        eliminarAlumno(id)
    }
})

function editarAlumno (id){
    const alumnos = obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditado = id;

}


