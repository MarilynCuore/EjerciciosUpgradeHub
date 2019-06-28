let number = [1,2,3]
let strings = ['hola', 'adios']
let boolean = [true, false]

// Es5
let array = []
    array = array.concat(number, strings, boolean)
    console.log(array)

// es6

let array2 = [...number, ...strings, ...boolean]
console.log(array2)

let nombres = []
    //ultimo
    nombres.push("Mary")
    //principio
    nombres.unshift("Edu")
    //quita el primero
    number.shift()
    console.log(number)
    //quita el ultimo
    number.pop()
    console.log(number)

