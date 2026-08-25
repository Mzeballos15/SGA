const docentes = [];   //representa la coleccion de docentes 
const formulario = document.querySelector("#formDocentes");

formulario.addEventListener("submit", function(event){ //obtener los datos del formulario
    event.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim()  // en nombre guardo los datos del campo con id nombre
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

});