
//Poner en mayusculas 
let  amigo = 'amigo'
let mayuscula = amigo.charAt(0).toUpperCase()
let restOfWord =  amigo.slice(1)
let allWord = mayuscula + restOfWord
console.log(allWord)

//Poner en minusculas  1
let amigo = 'Amigo';
amigo(upperCase(amigo))
function upperCase(amigo){
    return amigo.charAt(0).toUpperCase() + amigo.slice[1]
}

//Poner en minusculas 2
let amigo = 'Amigo'
function upperCase(amigo){
    let amigoArray = amigo.split('')
    let firstWord = amigo[0].join('').toUpperCase()
    let restOfWord = amigo.slice(1)
    return  firstWord +  restOfWord
}