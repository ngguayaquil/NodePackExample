var call_counter = require('./call_counter');

function add(x, y) {
    call_counter();
    return x + y;
}

function subtract(x, y) {
    call_counter();
    return x - y;
}

function saludarNgGuayaquil(lugarCharla){
    var mensaje = "Hola te saluda NgGuayaquil, desde "+lugarCharla;
    console.log(mensaje);
    return mensaje;
}

module.exports = {
    addition: add,
    subtraction: subtract,
    saludarEnCharla:saludarNgGuayaquil
}