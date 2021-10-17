var figura = prompt("¿Para qué figura quieres calcular el área? Puede ser TRIÁNGULO, CUADRADO, CÍRCULO.")

function triangulo(){
    let base = Number(prompt("¿Cuál es la base de triángulo?"))
    let altura = Number(prompt("¿Cuál es la altura de tu de triángulo?"))
    var areaTriangulo = (base*altura)/2
    return areaTriangulo
}

function circulo(){
    let radio = Number(prompt("¿Cuál es el radio de tu círculo?"))
    var areaCirculo = (radio ** 2) * Math.PI
    return areaCirculo
}

function cuadrado (){
    let lado = Number(prompt("¿Cuál es el lado de tu cuadrado?"))
    var areaCuadrado = lado ** 2
    return areaCuadrado
}

switch (figura){
    case 1:
        if (figura = "TRIANGULO"){
            function triangulo()
            console.log("El área de tu triángulo es: " + areaTriangulo)
        }
    break
    case 2:
        if (figura = "CIRCULO"){
            function círculo()
            console.log("El área de tu círculo es: " + areaCirculo)
        }
    break
    case 3:
        if (figura = "CUADRADO"){
            function cuadrado()
            console.log("El área de tu cuadrado es: " + areaCuadrado)
        }
    break
    default:
        alert("El parámetro que has introducido no es el correcto, prueba a recargar la página y poner: TRIANGULO, CIRCULO o CUADRADO.")
    break
}