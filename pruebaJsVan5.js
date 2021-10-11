var numero1

numero1 = Number (prompt("¿Qué número quieres comprobar?"))

var resto

resto = numero1 % 2 

if (resto == 0){    
    console.log("¡El número es divisible entre dos!")
} else {
    console.log("¡El número NO es divisible entre dos! :(")
}