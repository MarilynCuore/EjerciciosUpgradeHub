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

let persons = [
    {id:1, name: "edu", age: 24},
    {id:2, name: "mary", age: 32}
]
// Map
persons = persons.map( (elem, index) => {
    elem.saludo = `Me llamo ${elem.name} y tengo ${elem.age}`
    return elem
})
console.log(persons)
//Filter
 

