import { useState } from "react";

function FormularioA (){
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [carrera, setCarrera] = useState("")
    const [legajo, setLegajo] = useState("")


    function guardar (e){
        e.preventDefault()
        console.log(nombre)
        console.log(correo)
    }
    return(
        <>
        <form onSubmit={guardar}>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <input value={carrera} onChange={(e) => setCarrera(e.target.value)} />
            <input value={legajo} onChange={(e) => setLegajo(e.target.value)} />

            <button type="submit">Guardar</button>
        </form>
        <p>Legajo: {legajo}</p>
        <p>Nombre: {nombre}</p>
        <p>Correo: {correo}</p>
        <p>Carrera: {carrera}</p>
        </>
        
    )
}
export default FormularioA