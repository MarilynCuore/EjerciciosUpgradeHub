
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
let amigo = 'amigo'
function upperCase(amigo){
  let a = amigo.split('')
  a[0] = a[0].toUpperCase()
  return a.join('')
}
console.log(upperCase(amigo))

