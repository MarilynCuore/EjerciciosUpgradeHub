//ECMA SCRIPT 5 //
function hola(){
console.log('hola')
}
hola()
//ECMA SCRIPT 6//
const adios = ()=>{
    console.log('adios')
}
adios()
//ARGUMENTOS//
const message = message => console.log(message)
message('hola')
//EJERCICIO//
const operation = operation => {
    if ( isNaN(operation) = false ){
        return operation * operation
    }else {
        console.log('Solo puedes utilizar esta funcíon con números')
    }
  
}

console.log(operation("caca"))