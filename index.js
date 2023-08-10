let partidas = [];

function seleccion(opcion) {
    let jugador = document.getElementById("jugador_1");
    let seleccion;
    let figura;
    let remover = document.getElementsByClassName("boton");
    let opcion_J2 = Math.round(Math.random() * (3 - 1) + 1);
    for (let i = 0; i < remover.length; i++) {
        remover[i].removeAttribute("onclick");
    }
    if (opcion === "tijera") {
        seleccion = document.getElementById("tijera");
        figura = seleccion.cloneNode();
        figura.style = "font-size: 8em;";
        jugador.appendChild(figura);
    }
    else if (opcion === "piedra") {
        seleccion = document.getElementById("piedra");
        figura = seleccion.cloneNode();
        figura.style = "font-size: 8em;";
        jugador.appendChild(figura);
    }
    else if (opcion === "papel") {
        seleccion = document.getElementById("papel");
        figura = seleccion.cloneNode();
        figura.style = "font-size: 8em;";
        jugador.appendChild(figura);
    }
    sistema(opcion_J2);
    let resultado = document.getElementById("resultado");
    let parrafo = document.createElement("p");
    parrafo.className = "resultado";
    if (opcion === "tijera" && opcion_J2 == 1 || opcion === "piedra" && opcion_J2 == 2 || opcion === "papel" && opcion_J2 == 3) {
        parrafo.innerHTML = "Empate";
        parrafo.style = "position: absolute; font-style: oblique; padding-bottom: 50px";
        resultado.appendChild(parrafo);
        partidas.unshift("Empate");
    }
    else if (opcion === "tijera" && opcion_J2 == 2 || opcion === "piedra" && opcion_J2 == 3 || opcion === "papel" && opcion_J2 == 1) {
        parrafo.innerHTML = "Perdiste";
        parrafo.style = "position: absolute; font-style: oblique; padding-bottom: 50px";
        resultado.appendChild(parrafo);
        partidas.unshift("Perdiste");
    }
    else if (opcion === "tijera" && opcion_J2 == 3 || opcion === "piedra" && opcion_J2 == 1 || opcion === "papel" && opcion_J2 == 2) {
        parrafo.innerHTML = "Ganaste";
        parrafo.style = "position: absolute; font-style: oblique; padding-bottom: 50px";
        resultado.appendChild(parrafo);
        partidas.unshift("Ganaste");
    }
    if (partidas.length > 5) {
        partidas.pop();
    }
    let historial = document.getElementById("historial");
    historial.innerHTML = partidas.join(" - ")
};

function sistema(opcion) {
    let jugador = document.getElementById("jugador_2");
    let seleccion;
    let figura;
    if (opcion == 1) {
        seleccion = document.getElementById("tijera");
        figura = seleccion.cloneNode();
        figura.style = "font-size: 8em;"
        jugador.appendChild(figura);
    }
    else if (opcion == 2) {
        seleccion = document.getElementById("piedra");
        figura = seleccion.cloneNode();
        figura.style = "font-size: 8em;"
        jugador.appendChild(figura);
    }
    else if (opcion == 3) {
        seleccion = document.getElementById("papel");
        figura = seleccion.cloneNode();
        figura.style = "font-size: 8em;"
        jugador.appendChild(figura);
    }
};

function reiniciar() {
    let jugador1 = document.getElementById("jugador_1");
    let jugador2 = document.getElementById("jugador_2");
    jugador1.innerHTML = "";
    jugador2.innerHTML = "";
    let add = document.getElementsByClassName("boton"); 
    add[0].setAttribute("onclick", "seleccion('piedra')");
    add[1].setAttribute("onclick", "seleccion('papel')");
    add[2].setAttribute("onclick", "seleccion('tijera')");
    let resultado = document.getElementsByClassName("resultado");
    for(let i in resultado){
        resultado[i].innerHTML = ""
    }
};