let nombre = prompt ("Ingrese su nombre");
function saludo() {
    if (nombre) {
        alert("Bienvenido " + nombre )
    }
    else {
        alert("Debe ingresar un nombre")
    }
}

saludo();

