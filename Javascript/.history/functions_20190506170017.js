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
    parseInt(operation)
    if ( !isNaN(operation) ){
        return operation * operation
    }else {
        return 'Solo puedes utilizar esta función con números'
    }
  
}

console.log(operation("hola"))


const sume =  numberOne => {
    return numberTwo => {
        return numberTwo + numberOne;
    }
}