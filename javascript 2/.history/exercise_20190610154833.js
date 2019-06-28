
//Calcula el DNI
function returnDni(num) {
    if(typeof(num) != 'number') return alert('Debes introducir un valor numérico')
    if(num < 0 ) return alert('Debes introducir un valor positivo')
    
    const pos = num%23
    const letter = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

    if(num.toString().length < 8){
        alert('Debes introducir un número de 8 cifras')
       let num_string = num.toString()
       let zeros = 8 - num_string.length
       let new_number = ''
       if(zeros > 0 ) {
            for(let i = 0; i < zeros; i++ ){
                new_number = '0' + new_number
            }
       }
       num = new_number + num
    }
    // if(num.toString().length < 8){
    //     let num_string = num.toString()
    //     let zeros = 8 - num_string.length
    //     let array_zeros = new Array(zeros).fill("0").join().replace(/,/g, '')
    //     num = array_zeros + num
    // }
    return num + letter[pos]
  }
  alert(returnDni(5598395));

  //Devuelve el string con mayor longitud 
  let frases = ['Hola', 'Frase corta', 'Frase normalita', 'Frase muy muy larga'];  
  function returnStringMasLargo(frases){  
    let word = ''
    for(let palabra of frases) {
      if(palabra.toString().length > word.length) word = palabra
    }
    return `La palabra ${word} es la más larga y mide ${word.length} caracteres`;
  }
  alert(returnStringMasLargo(frases));

  //Media de longitudes
  var resultados = [];
  var arrayDeTest1 = ["Richie", "Joanie", "Greg", "Marcia", "Bobby"];
  var arrayDeTest2 = ["Blanka", "Zangief", "Chun Li", "Guile"];
  var arrayDeTest3 = ["Red", "Blue", "Green"];

  function calculoLongitudMasLargo(frases){
    let word = ''
    for(let palabra of frases) {
      if(palabra.toString().length > word.length) word = palabra
    }
    resultados.push(word) 
  }

  //Contar letras
  let resultados = []
  let characters = 'abbabcbdbabdbdbabababcbcbab'
   function characterCounter(characters){
     let charactersArray = characters.split('');
     let vocals = {};
 
     for( let character = 0; character < characters.length; character++){
       var letraActual = character[character];
       
       if(vocals[letraactual]){
         vocals[letraactual] ++;
       } else {
         vocals[letraactual] = 1;
       }
     }
   }

  //Media de los valores del string
  let stringDeNumeros = '80:70:90:100'
  function halfValue(stringDeNumeros){
    let num_array = stringDeNumeros.split(':')
    let total = 0;
    for(let num of num_array) {
      if(num = !total){
        total = total + parseInt(num)
      }   
    }
    return total / num_array.length 
  }
  //Suma 
   function suma(var1, var2){
     let result = parseInt(var1) + parseInt(var2)
     return suma;
   }

   //Hora
   function time(hora){
     if( hora < 12){
       console.log('Es por la mañana')
     }else{
       console.log('Es por la tarde')
     }
   }

   //Minutos

   function calculateMin(min){
    let hour = min / 60
    return Math.trunc(hour)
   }

console.log(calculateMin(10000))

   //Return string al reves

   function reverseString(str) {
    return str.split("").reverse().join("");;
  }

//quitar espacios
var incognita = "Hola como estas"
function frase(incogita){
  return incognita.replace(/ /g, "")
}
console.log(frase(incognita))

//mayusculas
var incognita = "Hola como estas"
function frase(incogita){
  return incognita.toUpperCase();
}
console.log(frase(incognita))

//Palíndromo
var incognita = "Ama"
function frase(incogita){
  let nuevoArray = incognita.split("");
  let alReves = nuevoArray.reverse().join("").toLowerCase();
  return alReves == incognita.toLowerCase();
}
console.log(frase(incognita))


//zoo
class animal{
constructor(animal) {
  this.name = animal.name
  this.maximumCapacity = animal.maximumCapacity
  this.maximunCapacityAnimals = animal.maximunCapacityAnimals
  this.currentCapacity = 0
}
}

class Person {
constructor(person) {
  this.type = person.type
  this.cash = person.cash
}
}
class Animal {
constructor(name){
  this.name = name
  this.health = 50
  this.hungry = 50
  this.sick = false
  setTimeout(()=> setInterval(this.living(), 5000), 5000)
  setTimeout(()=> setInterval(this.eating(), 1000*60*60), 1000*60*60)
}
eating() {
  console.log("Comiendo")
  if(this.hungry == 100) this.hungry = 0
  else {
    this.hungry += 10
  }
}
living() {
  console.log("Viviendo")
  if(this.health >= 50) {
    let type = Math.floor((Math.random() * 2) + 1 )
    if(type == 1) {
      if(this.health + 10 < 100)  this.health += 10
    }else if(type == 2) {
      if(this.health - 10 > 0) this.health -= 10
    }
  } else {
    this.sick = true
  }
   
}
}
class Place {
  constructor(animal) {
    this.name = animal.name
    this.maximumCapacity = animal.maximumCapacity
    this.maximunCapacityAnimals = animal.maximunCapacityAnimals
    this.currentCapacity = 0
  }
}

class Person {
  constructor(person) {
    this.type = person.type
    this.cash = person.cash
  }
}
class Animal {
  constructor(name){
    this.name = name
    this.health = 50
    this.hungry = 50
    this.sick = false
    setTimeout(()=> setInterval(this.living(), 5000), 5000)
    setTimeout(()=> setInterval(this.eating(), 1000*60*60), 1000*60*60)
  }
  eating() {
    console.log("Comiendo")
    if(this.hungry == 100) this.hungry = 0
    else {
      this.hungry += 10
    }
  }
  intoTheHospital() {
    this.health += 10
  }
  living() {
    console.log("Viviendo")
    if(this.health >= 50) {
      this.sick = false
      let type = Math.floor((Math.random() * 2) + 1 )
      if(type == 1) {
        if(this.health + 10 < 100)  this.health += 10
      }else if(type == 2) {
        if(this.health - 10 > 0) this.health -= 10
      }
    } else {
      this.sick = true
      this.intoTheHospital()
    }
     
  }
}

let zoo = {
  name: 'Zoologico Madrid',
  opening: '9:00',
  close: '21:00',
  maximumCapacity: 2000,
  newVisitor: 0,
  maximunCapacityAnimals: 2000,
  cash: 0,
  entrancePrice: {
    kids: 0,
    old: 0,
    students: 3,
    adult: 5,   
  },
  places: [
    new Place({name:"reptiles",maximumCapacity: 700,maximunCapacityAnimals:200 }),
    new Place({name: 'birds',maximumCapacity: 300,maximunCapacityAnimals:460 }),
    new Place({name: 'mammals', maximumCapacity: 1000,maximunCapacityAnimals:200 })
  ],
  animals: [
    new Animal('zebra'),
    new Animal('monckey')
  ]
}
function capacityOfZoo(person){
  if(zoo.newVisitor < zoo.maximumCapacity) {
    
    zoo.cash += zoo.entrancePrice[person.type]
    person.cash -= zoo.entrancePrice[person.type]
    zoo.newVisitor++
    let index_where = selectRandomPlace()
    let place = selectRandomPlace()
        place.currentCapacity++
    return place.name
    
  }else {
    alert("No puedes entrar")
  }
}

function selectRandomPlace(){
  let index_where =  Math.floor((Math.random() * zoo.places.length ))
  if(zoo.places[index_where].currentCapacity < zoo.places[index_where].maximumCapacity) {
    
    return zoo.places[index_where]
  }else {
    selectRandomPlace()
  }
}
  


let Edu = new Person({type: 'students', cash: 20})

console.log(capacityOfZoo(Edu))
console.log(Edu.cash)


setInterval(()=>{
  for(let a of zoo.animals){
    console.log(a.hungry)
    console.log(a.health)
  }
  
},4000)


//Cumpleaños


function calcular_edad(){
 
  var dia = prompt("Día de nacimiento:");
  var mes = prompt("Mes de nacimiento:");
  var ano = prompt("Año de nacimiento:");
   
  fecha_hoy = new Date();
  ahora_ano = fecha_hoy.getFullYear(); // 119
  ahora_mes = fecha_hoy.getMonth(); // 5
  ahora_dia = fecha_hoy.getDate(); // 10
  edad = ahora_ano - ano;
      
      if ( ahora_mes < (mes - 1)){
        edad--;
      }
      if (((mes - 1) == ahora_mes) && (ahora_dia < dia)){ 
        edad--;
      }
      if (edad > 1900){
          edad -= 1900;
      }
   
      alert("¡Tienes " + edad + " años!");
  }
  
  calcular_edad()
  
//Calculadora

function calculadora(){
 
  var valor1 = prompt("Introduce un valor:");
  var operacion = prompt("Introduce un operador:");
  var valor2 = prompt("Introduce un valor:");
  var resultado
   
  switch(operacion) {
    case "+":
      resultado = parseInt(valor1) + parseInt(valor2);
      break;
    case "-":
      resultado = parseInt(valor1) - parseInt(valor2);
      break;
    case "x":
      resultado = parseInt(valor1) * parseInt(valor2);
      break;
    case "/":
      resultado = parseInt(valor1)/ parseInt(valor2);
    default:
      resultado = 'Ha ocurrido un error'
  }
   
      alert('El resultado de tu operación es : ' + resultado);
  }
  
  calculadora()

  //Calcular media
  let notas = []


function addNota() {
  let p = prompt("Inserta tu nota")
      if(p.toLowerCase() == 'fin') return avg()
      p = parseFloat(p)
   if(isNaN(p)) {
     alert("Debes añafir un numero")
     addNota()
   }else {
     notas.push(p)
     addNota()
   }
}


function avg() {
  let resultado = 0
  notas.forEach(num => resultado += num)
  return resultado / notas.length 
}


addNota()