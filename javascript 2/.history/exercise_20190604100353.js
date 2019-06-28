
//Calcula el DNI

function returnDni(num) {
    const pos = num%23
    const letter = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    return num + letter[pos]
  }
  alert( returnDni(5598395));