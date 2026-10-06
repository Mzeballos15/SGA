import { useState } from "react";

export function Adivina(){
    const [seleccion,setSeleccion]= useState("")
    const [resultado, setResultado]= useState("")
    const [colorResultado, setColorResultado]= useState("")
    const [ganadas, setGanadas]= useState("0")
    const [perdidas, setPerdidas]= useState("0")
    const [jugadas, setJugadas]= useState("0")
 

    function sortear(){
        const ganador = Math.floor(Math.random () * 10) + 1 //floor saca los decimales, random genera numero aleatorio math es la libreria de esos metodos
        const elegido = Number(seleccion)
        setJugadas (jugadas + 1)
      

        if(seleccion === ""){
            setResultado("Ingresá un número")
            return
        }
        if (elegido < 1 || elegido > 10){
            setResultado("Ingresá un numero entre 1 y 10")
            return
        }
        if (elegido === ganador){
            setResultado(`Ganaste!! salió ${ganador} y elegiste ${elegido}`)
            setColorResultado ("green")
            setGanadas(ganadas + 1)

        }else{
          setResultado(`Perdiste :( salió ${ganador} y elegiste ${elegido}`)
          setColorResultado ("red")
          setPerdidas (perdidas + 1)

        }
    }
    return(
        <>
        <h2>Adiviná el número</h2>
        <input type="number" value={seleccion} onChange={(e) => setSeleccion(e.target.value)} />
        <button onClick={sortear}>Adivinar</button>
        <p style={{color: colorResultado}}>{resultado}</p>
        <hr />
        <p>Partidas Jugadas: {jugadas}</p>
        <p>Partidas Ganadas: {ganadas}</p>
        <p>Partidas Perdidas: {perdidas}</p>
        </>
    )
}