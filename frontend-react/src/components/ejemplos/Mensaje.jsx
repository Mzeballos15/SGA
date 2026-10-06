import { useState } from "react";

function Mensaje(){
    const [mensaje, setMensaje]= useState("Hola, alumno")
    
    function nuevoMensaje(){
    setMensaje(mensaje === "Hola, alumno"
    ? "¡Bienvenidos a Programación IV! "
    : "Hola, alumno"
    )
    }


return (
    <>
   <h2>{mensaje}</h2>
    <button onClick={nuevoMensaje}>Cambiar mensaje</button>
    </>
)
}

export default Mensaje;