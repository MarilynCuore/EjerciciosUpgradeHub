
//Calcula el DNI

function returnDni(num) {
    if(typeof(num) != 'number') return alert('Debes introducir un valor numéricos')
    if(num.toString().length < 8) return alert('Debes introducir un número de 8 cifras')
    if(Math.sign(num) < 0 ) return alert('Debes introducir un valor positivo')


    const pos = num%23
    const letter = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    return num + letter[pos]
  }
  alert(returnDni(5598395));

//Devuelve el string con mayor longitud