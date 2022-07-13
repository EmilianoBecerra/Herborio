let saludo = document.querySelector(".saludo");

let nombre = prompt ("¡hola! ¿cúal es tu nombre?");


if (typeof nombre === "string"){
    saludo.textContent = "Bienvenidx " + nombre + " :)";
} else {
    saludo.textContent = "Bienvenidx :)"; 
}

