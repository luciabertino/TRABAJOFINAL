window.confirm("¿Estas seguro de entrar?por que son cosas muy bonitas para comprar")

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

