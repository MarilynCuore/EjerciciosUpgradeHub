
//Calcula el DNI

function returnDni(num) {
    if(typeof(num) != 'number') return alert('Debes introducir un valor numéricos')
    if(num < 0 ) return alert('Debes introducir un valor positivo')
    
    const pos = num%23
    const letter = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

    // if(num.toString().length < 8){
    //     alert('Debes introducir un número de 8 cifras')
    //    let num_string = num.toString()
    //    let zeros = 8 - num_string.length
    //    let new_number = ''
    //    if(zeros > 0 ) {
    //         for(let i = 0; i < zeros; i++ ){
    //             new_number = '0' + new_number
    //         }
    //    }
    //    num = new_number + num
    // }
    if(num.toString().length < 8){
        let num_string = num.toString()
        let zeros = 8 - num_string.length
        let array_zeros = new Array(zeros).fill("0").join().replace(/,/g, '')
        num = array_zeros + num
    }
    return num + letter[pos]
  }
  alert(returnDni(5598395));

  //Devuelve el string con mayor longitud 
  let frases = ['Hola', 'Frase corta', 'Frase normalita', 'Frase muy muy larga'];  
  function returnStringMasLargo(frases){  
    let word = ''
    for(let palabra of frases) {
      if(palabra.length > word.length) word = palabra
    }
    return `La palabra ${word} es la más larga y mide ${word.length} caracteres`;
  }
  alert(returnStringMasLargo(frases));


