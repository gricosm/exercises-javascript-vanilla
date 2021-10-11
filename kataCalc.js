var operacion = prompt ("Escribe la operación que quieres hacer. Puede ser: SUMAR, RESTAR, MULTIPLICAR, DIVIDIR")
var numero1 = Number(prompt ("Escribe el primer número de la operación."))
var numero2 = Number(prompt ("Escribe el segundo número de la operación."))
var resultado

function suma(){
    resultado = numero1 + numero2
}
function resta(){
    resultado = numero1 - numero2
}
function multiplicar(){
    resultado = numero1 * numero2
}
function dividir(){
    resultado = numero1 / numero2
}


switch (operacion) {
    case "SUMAR":
        suma()
    break;
    case "RESTAR":
        resta()
    break;
    case "MULTIPLICAR":
        multiplicar()
    break;
    case "DIVIDIR":
        dividir()
    break;
    default:
        alert("Eso no es una operación que pueda realizar. uwu")
    break;
}

console.log("El primer número es el " + numero1)
console.log("El segundo número es el " + numero2)
console.log("El resultado de la operación es: " + resultado)
alert("El resultado de la operación es: " + resultado)