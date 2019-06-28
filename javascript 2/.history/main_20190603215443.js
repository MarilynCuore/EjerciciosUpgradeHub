var ahorro = 0;
console.log('Comenzamos con ' + ahorro + ' dólares')

while(ahorro < 100) {
  ahorro = ahorro + 10;
  console.log(ahorro)
}

console.log('Terminamos con ' + ahorro + ' dólares')
var i = 0;
for(i = 0; i < 5; i++){
  console.log('La variable i vale : ' +i);
}
console.log('ya ha terminado el bucle for')

var variable1 = 'Hola'

switch(variable1){
  case 'valor 1':
    console.log('He entrado en el case1');
    break;
    
  case 'Hola':
    console.log('He entrado en el case 2');
    break;
    
  default:
    console.log('he entrado en el default')
}

var mesActual = 'Febrero'

switch(mesActual){
  case 'Enero':
    console.log('Enero');
    break;   
  case 'Febrero':
    console.log('Febrero');
    break;
  case 'Marzo':
    console.log('Marzo');
    break; 
  case 'Abril':
    console.log('Abril');
    break;
  case 'Mayo':
    console.log('Mayo');
    break;
  default:
    console.log('he entrado en el default')
}
var i = 50;
for(i = 50; i < 101; i++){
  console.log(i)
}


/*var paises = ['Mejico', 'España', 'Chile', 'Perú']
console.log('El primer país es: ' + paises[0]);
console.log('El tercer país es: ' + paises[3]);
console.log(paises)*/

var paises = ['Mejico', 'España', 'Chile', 'Perú']
for(var indice = 0; indice < paises.length; indice++){
  console.log('El país número ' + indice + ' es ' + paises[indice]);
}
var ordenadores = [];
ordenadores.push('HP Elitebook');
ordenadores.push('Mcbook Pro');
console.log(ordenadores);
ordenadores.unshift('Lenovo Ideapad')
console.log(ordenadores);
/*var último = ordenadores.pop(); //quitar el ultimo
var primero = ordenadores.shift(); //quitar el primero*/
ordenadores.pop();
console.log(ordenadores)
ordenadores.shift()
console.log(ordenadores)

let persona = {
  nombre : 'Fran',
  apellidos: 'Linde Blázquez',
  páis: 'España',
  profesion: 'Programador Front-End',
  procedencia: {
    pais: 'España',
    ciudad: 'Madrid',
    cp: '28029'
  }
}
console.log('La persona se llama ' + persona.nombre);
console.log('Y es ' + persona.profesion);
console.log('Y es de ' +  persona.procedencia.pais)
/*persona['nombre']*/
for(var indice in persona){
  console.log('Persona tiene ' + indice )
}

function generarMensajeDeSaludo(nombreDeLaPersona, esTarde, bien
                             ) {
  var mensajeDeSaludo = "";
  if (esTarde && bien) {
    mensajeDeSaludo = "Buenas tardes " + nombreDeLaPersona + ' me alegro de que estes bien';
  }else if (esTarde && !bien){ 
    mensajeDeSaludo = "Buenas tardes " + nombreDeLaPersona + ' lo siento';
  }else
    
    if(!esTarde && bien){
    mensajeDeSaludo = 'Buenos días ' + nombreDeLaPersona + ' me alegro de que estes bien';
  }else if (!esTarde && !bien) {
    mensajeDeSaludo = "Buenos días " + nombreDeLaPersona + ' lo siento';
  }else{
   mensajeDeSaludo = 'error'
  }
  return mensajeDeSaludo;
}
​
var saludo = generarMensajeDeSaludo("David", true, true);
​
console.log(saludo);

