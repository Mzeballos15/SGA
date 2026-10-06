import { useState } from "react";

function TamanioTexto(){
    const[tamanio, setTamanio]= useState("20px")
    return(
        <>
        <p style={{fontSize: tamanio}}>
            Sistema de Gestión Académico
        </p>
        <div style={{display: "flex", justifyContent: "center", gap:"10px", marginTop:"15px"}}>
        <button onClick={()=>setTamanio("10px")}>Pequeño</button>
        <button onClick={()=>setTamanio("20px")}>Mediano</button>
        <button onClick={()=>setTamanio("26px")}>Grande</button>
        </div>
        </>
    )
}
export default TamanioTexto
