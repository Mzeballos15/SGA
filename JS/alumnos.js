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
let alumnoEditado = null


formulario.addEventListener("submit", function(event){
    event.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim()
  const carrera = document.querySelector("#carrera").value.trim()
  const correo = document.querySelector("#correo").value.trim()

  if(nombre === "" || carrera === "" || correo ===""){
    mostrarMensaje ("Todos los campos son obligatorios!!", "mje-error")
    return
  }

  if(!correo.includes("@")){
    mostrarMensaje("Ingrese un correo electónico válido", "mje-error")
    return
  }

  if(nombre.length < 3){
    mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
    return
  }

  const alumnos = obtenerAlumnos()

  if(alumnoEditado === null){

  const alumno ={
    id: Date.now(),
    nombre: nombre,
    carrera: carrera,
    correo: correo
 }
  alumnos.push(alumno)
  mostrarMensaje("Alumno guardado correctamente", "mje-exito")
  } else{
    const alumno = alumnos.find(alumno => alumno.id === alumnoEditado)
    alumno.nombre = nombre
    alumno.carrera = carrera
    alumno.correo = correo
    alumnoEditado = null
    formulario.querySelector("button").textContent = "Guardar Alumno"
    
    mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
  }

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

function mostrarMensaje(texto, tipo){
    mensaje.textContent= texto;
    mensaje.className = tipo
    setTimeout(() => {
        mensaje.textContent = " ";
        mensaje.className = "oculto"
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
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
}

listaAlumnos.addEventListener("click",(e) =>{
    if(e.target.classList.contains("btn-eliminar")){
        const id = Number(e.target.dataset.id)
        eliminarAlumno(id)
    }
    if(e.target.classList.contains("btn-editar")){
        const id = Number(e.target.dataset.id)
        editarAlumno(id)
    }
})

function editarAlumno (id){
    const alumnos = obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditado = id;
    formulario.querySelector("button").textContent = "Actualizar Alumno"

}

const alumnos = obtenerAlumnos()
mostrarAlumnos(alumnos)


