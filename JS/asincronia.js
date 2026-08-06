
// console.log("Inicio")
// setTimeout(()=>{
//   console.log("Buscando alumnos...")
// },3000)
// console.log("Fin")

// /*colback es una función que es tomada como argumento dentro de otra función */

// function saludar (){
//     console.log("Hola")
// }

// function ejecutar(funcion){
//     funcion();
// }
// ejecutar(saludar)

// function despedirse(){
//     console.log("hasta luego")
// }
// setTimeout(despedirse, 3000)

// setTimeout(() => {
//     console.log("Buscando docentes...")
// }, 2000);

// setTimeout(() => {
//     console.log("Buscando materias...")
// }, 4000);

// setTimeout(() => {
//     console.log("Buscando cursos...")
// }, 1000);

/*console.log("Abriendo SGA")
setTimeout(() => {
    console.log("Alumnos cargados")
},3000);

console.log("El usuario puede seguir navegando")*/

/* EN 5 SEGUNDOS DE ESPERA TIENE QUE APARECER LA LEYENDA LISTA RECIBIDA MIENTRAS
 TIENE QUE SALIR SOLICITANDO LISTA DE ALUMNOS 
Y MIENTRAS ESPERA TIENE QUE APARECER MIENTRAS TANTO EL PROGRAMA SIGUE EJECUTANDOSE*/


// console.log("Solicitando lista de alumnos")
// setTimeout(() => {
//     console.log("Lista recibida")
// },5000);
// console.log("Mientras tanto el programa sigue ejecutandose")

// function obtenerAlumnos(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve(["Ana","Jose","Juan"])
//         }, 3000);
//     })
// }
// obtenerAlumnos().then((alumnos) =>{
//     console.log(alumnos)
// })

// async function iniciar() {
//     const alumnos = await obtenerAlumnos()
//     console.log(alumnos)
// }
// iniciar()





// function obtenerClima(){
//     return new Promise ((resolve) =>{
//         setTimeout(() => {
//             resolve ("22°c - Soleado")
//         },2000);
//     })
// }

// // con then 
// obtenerClima().then((clima) =>{
//     console.log(clima)
// });

// async function mostrarClima(){
//     const clima = await obtenerClima()
//     console.log(clima)
// }

// mostrarClima()

// function consultarSaldo(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//            resolve(125000) 
//         }, 3000);
//     })
// }

// async function monstrarSaldo(){
//     const saldo = await consultarSaldo()
//     console.log(`Su saldo es: $${saldo}`)
// }
// monstrarSaldo()

// function iniciarSesion(){
//     return new Promise ((resolve) =>{
//         setTimeout(() => {
//            resolve("Bienvenida, Mely") 
//         }, 2000);
//     })
// }
// async function saludar(){
//     const saludo = await iniciarSesion()
//     console.log(saludo)
// }
// saludar()



//POST
 async function obtenerPost(){
     const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
     const posts = await respuesta.json()
    return posts;
 }
 obtenerPost()

 function mostrarPost(posts){
     for (const post of posts ){
         console.log(post.id, post.title)
     }
 }

 async function iniciar(){
     const post = await obtenerPost()
     mostrarPost(post);
 }
 iniciar();



 //COMMENTS
async function obtenerComments(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comments = await respuesta.json()
   // console.table(alumnos)
   return comments;
}
obtenerComments()

function mostrarComments(comments){
    for (const comment of comments ){
        console.log(comment.id, comment.name)
    }
}

async function iniciar(){
    const comment = await obtenerComments()
    mostrarComments(comment);
}
iniciar();