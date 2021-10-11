var nota
var resultado
nota = prompt ("Escribe que nota has sacado en el exámen:")


if (nota < 5) {
    resultado = "Insuficiente."
} else if (nota >= 5 && nota < 7) {
    resultado = "Suficiente."
} else if (nota >= 7 && nota < 9){
    resultado = "Notable."
} else if (nota >= 9 && nota <= 10){
    resultado = "Sobresaliente."
}

console.log( resultado )