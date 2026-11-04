import { ListaMaterias} from "../components/ListaMaterias"
import { useState } from "react"
import FormularioM from "../components/FormularioM"
import { Alert } from "@mui/material"

export default function Materias() {
const [actualizar, setActualizar] = useState(0)
const [materiaEditar, setMateriaEditar] = useState(null)
const [mensaje, setMensaje] = useState("") // mensaje de éxito

function materiaCreada(texto) {
  setActualizar(valor => valor + 1)
  setMateriaEditar(null)
  setMensaje(texto)
}

function seleccionarMateria(materia) {
  setMateriaEditar(materia)
  setMensaje("")
}

return (
   <>
   {mensaje && (
  <Alert severity="success" role="status" sx={{ mb: 2 }}>
    {mensaje}
  </Alert>
)}
   <FormularioM key={materiaEditar?.codigo ?? "nuevo"}
   onMateriaCreada={materiaCreada}
   materiaEditar={materiaEditar}
   onCancelar={() => setMateriaEditar(null)}
   />
   <ListaMaterias 
   actualizar={actualizar} 
   onMateriaCreada={materiaCreada}
   onEditarMateria={seleccionarMateria} 
   /> 
  </>
  )
}