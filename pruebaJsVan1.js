var numero1
var numero2
var resultado

numero1 = Number(prompt ("Escribe el primer número que desees comparar:"))
numero2 = Number(prompt ("Escribe el segundo número que desees comparar:"))

if (numero1 > numero2){
    resultado = numero1 + " es el mayor"
} else if (numero1 < numero2){
    resultado = numero2 + " es el mayor"
} else if (numero1 == numero2){
    resultado = "En esta ocasión los números son iguales.";
}

console.log(resultado)