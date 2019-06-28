console.log('perro')
let nombre = 'Marilyn'
//Saber la longitud de un string//
console.log(nombre.length)
//Posición de un caracter//
console.log(nombre.indexOf('M'))
console.log(nombre.indexOf('s'))
//Letras Mayusculas//
console.log(nombre.toUpperCase())
//Letras minisculas//
console.log(nombre.toLowerCase())
let saludo = 'Hola *'
//Sustituir un elemento//
console.log(saludo.replace('*', nombre))
let string = '   algo     '
//Quitar espacios//
console.log(string.trim())
//Coger un caracter//
console.log(nombre[0])
//Convertir un string a un array//
let dias = 'domingo, lunes, martes, miercoles, jueves, viernes, sabado'
console.log(dias.split(','))
let number = '2'
//convertir un string a número//
console.log(parseInt(number) + 1)
let secondNumber = '1.27'
console.log(parseFloat(secondNumber))
number = number + ' días'
console.log(number)
console.log(parseInt(number) + 1)
console.log(parseInt('hola'))

let html =  "<ul>"
    html += "<li> hola </li>"
    html += "</ul>"
    console.log(html)


