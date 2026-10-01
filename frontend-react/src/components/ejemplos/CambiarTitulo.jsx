import {useState} from "react";

function CambiarTitulo(){
    const [titulo, setTitulo]= useState("Inicio")

    return (
        <>
        <h2>{titulo}</h2>
        <div style={{display:"flex", justifyContent:"center", gap:10}}>
            <button onClick={() => setTitulo("Alumnos")} style={{fontSize:"20px", color: "black", backgroundColor: "pink"}}>Alumnos</button>
            <button onClick={() => setTitulo("Docentes")}style={{fontSize:"20px",color: "black", backgroundColor: "pink"}}>Docentes</button>
        </div>
        </>
    )
}
export default CambiarTitulo