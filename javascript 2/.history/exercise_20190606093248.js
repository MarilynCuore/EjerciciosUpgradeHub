
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
  let newIncognita = incognita.toLowerCase();
  let nuevoArray = incognita.split("");
  let alReves = nuevoArray.reverse().join("").toLowerCase();
  let solution
  if(alReves == newIncognita){
    solution = true
  } else solution = false
  
  return solution
}
console.log(frase(incognita))


//zoo

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
    rest: 5,   
  },
  reptiles: {
    maximumCapacity: 700,
    maximunCapacityAnimals: 200,
    classOfReptiles : {
      lizards: 30,
      turtles: 50,
      snakes: 100,
      cocodriles : 20,   
    },
  },
  birds:{
    maximumCapacity: 300,
    maximunCapacityAnimals: 460,
    classOfBirds :  {
      penguins: 150,
      Flemish: 200,
      owls: 10,
      ducks: 100,
    },
  },
  mammals: {
    maximumCapacity: 1000,
    maximunCapacityAnimals: 200,
    classOfMammal: {
      tigers: 100,
      dolphins: 20,
      tigers: 30,
      zebras: 100,
      giraffes: 200,
      lions: 50,
      monkeys: 300,
      camels: 100,
      bears: 100,
    }
  }
}

function capacityOfZoo(visitor, entrancePrice){
  if(zoo.newVisitor <  2000){
    ++zoo.newVisitor
  }
}
