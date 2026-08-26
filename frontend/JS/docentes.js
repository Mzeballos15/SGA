const docentes = [];   //representa la coleccion de docentes 
const formulario = document.querySelector("#formDocentes");
let docenteEditado = null;

formulario.addEventListener("submit", function(event){ //obtener los datos del formulario
    event.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim()  // en nombre guardo los datos del campo con id nombre
  const especialidad = document.querySelector("#especialidad").value.trim()
  const correo = document.querySelector("#correo").value.trim()

  if(nombre === "" || especialidad === "" || correo ===""){
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

if(alumnoEditado === null){
  const docente ={
    id: Date.now(),
    nombre: nombre,
    especialidad: especialidad,
    correo: correo
  }
  docentes.push(docente)
  mostrarMensaje("Docentes cargados correctamente")
}else{
  const docente = docentes.find(docente => docente.id === docenteEditado)
    docente.nombre = nombre
    docente.especialidad = especialidad
    docente.correo = correo
    docenteEditado = null
    formulario.querySelector("button").textContent = "Guardar Docente"
    
    mostrarMensaje("Docente actualizado correctamente", "mje-exito")
}

mostrarAlumnos(alumnos)
  formulario.reset()
});

function obtenerDocente(){
  const datos = localStorage.getItem("docentes")
    if (datos){
        return JSON.parse(datos)
    }
    return[]
}

function mostrarMensaje(texto, clase) {
    mensaje.textContent= texto;
    mensaje.className = `mensaje ${clase}`
    mensaje.style.display = "block"
    setTimeout(() => {
        mensaje.style.display = "none"
    }, 3000);
}

function mostrarDocentes(docentes){
    listaDocentes.innerHTML = ""
    for (const docente of docentes){
        listaDocentes.innerHTML += `
        <tr>
          <td>${docente.id}</td>
          <td>${docente.nombre}</td>
          <td>${docente.especialidad}</td>
          <td>${docente.correo}</td>
          <td>
             <button 
             class= "btn-editar"
             data-id="${docente.id}"
             title ="Editar Docente">
             <i class = "fa-solid fa-pen"></i>
             </button>

             <button 
             class= "btn-eliminar" 
             data-id="${docente.id}"
             title = "Eliminar Docente">
             <i class="fa-solid fa-trash"></i>
             </button>
          </td>
        </tr>
        `;
    }
}