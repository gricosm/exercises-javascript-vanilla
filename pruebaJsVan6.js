var precio = Number(prompt("Inserte el precio de su artíulo antes de impuestos:"))

const iva = precio*0.21

precio = iva+precio

console.log("El precio con IVA de su artículo es "+ precio +" €.")