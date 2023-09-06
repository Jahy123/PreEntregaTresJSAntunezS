
let listaTareas = []


let listaTareasJSON = JSON.stringify(listaTareas)
localStorage.setItem("Tareas", listaTareasJSON)
let listaTareasRecuperadas = JSON.parse(localStorage.getItem("Tareas")) || [];





let verListaTareas = document.getElementById("verListaTareas")
verListaTareas.addEventListener("click", mostrarHojaTareas)


let contenedorInicio = document.getElementsByClassName("contenedorInicio")[0]


function mostrarHojaTareas() {
    verificarTareas()
    contenedorInicio.className = "esconder"

    let hojaTareas = document.getElementsByClassName("esconder")[1]
    hojaTareas.className = "hojaTareas"
}

let botonEscribirTarea = document.getElementById("botonEscribirTarea")
botonEscribirTarea.addEventListener("click", nuevasTareas)

let nuevaTarea = document.getElementsByClassName("crearTarea")[0]
let sinTareas = document.getElementsByClassName("esconder")[1]



function nuevasTareas() {

    if (nuevaTarea.classList.contains("crearTarea")) {
        nuevaTarea.className = "nuevaTarea"

        let entradaTarea = document.createElement("input")
        nuevaTarea.appendChild(entradaTarea)
        entradaTarea.className = "entradaTarea"

        let enviarTarea = document.createElement("button")
        nuevaTarea.appendChild(enviarTarea)
        enviarTarea.className = "botonEnviarTarea"
        enviarTarea.innerText = "Agregar"
        enviarTarea.addEventListener("click", enviar)


    }
    else {
        let enviarTarea = document.createElement("button")
        nuevaTarea.className = "nuevaTarea"
        enviarTarea.addEventListener("click", enviar)

    }



}

function enviar() {
    let entradaTarea = document.getElementsByClassName("entradaTarea")[0]
    let valorIngresado = entradaTarea.value
    if (valorIngresado.trim() !== "") {
        let nuevaTarea = { titulo: valorIngresado }
        listaTareasRecuperadas.push(nuevaTarea)
        localStorage.setItem("Tareas", JSON.stringify(listaTareasRecuperadas))

        entradaTarea.value = ""
        verificarTareas()
    }
}
function verificarTareas() {
    let listaTareasRecuperadas = JSON.parse(localStorage.getItem("Tareas"))
    let hayTareas = false

    for (let tarea of listaTareasRecuperadas) {
        if (tarea.titulo !== undefined) {
            hayTareas = true
            break
        }
    }

    let contenedorTareas = document.getElementById("contenedorTareas")
    contenedorTareas.innerHTML = ''
    if (hayTareas) {
        let lista = document.createElement("ul")
        for (let tarea of listaTareasRecuperadas) {
            if (tarea.titulo !== undefined) {
                let itemTarea = document.createElement("li")
                itemTarea.textContent = tarea.titulo
                lista.appendChild(itemTarea)
            }
        }
        contenedorTareas.appendChild(lista)
    } else {
        let noHayTareas = document.getElementsByClassName("esconder")[1]
        noHayTareas.className = "sinTareas"
    }
}

let regresarALista = document.getElementById("botonRegresarAListaTareas")
regresarALista.addEventListener("click", regresar)

function regresar() {
    let nuevaTarea = document.getElementsByClassName("nuevaTarea")[0]
    nuevaTarea.className = "esconder"
}










