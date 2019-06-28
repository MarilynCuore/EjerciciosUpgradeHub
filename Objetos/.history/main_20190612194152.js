//Calculadora 1
class calculadora {
    constructor( value1, value2){
      this.value1 = value1;
      this.value2 = value2;
    }
    calcSuma(){
      return console.log(parseInt(this.value1) + parseInt(this.value2));
    }
    calcResta(){
      return console.log(parseInt(this.value1) - parseInt(this.value2));
    }
    calcDivision(){
      return console.log(parseInt(this.value1) / parseInt(this.value2));
    }
    calcMultiplicación(){
      return console.log(parseInt(this.value1) * parseInt(this.value2));
    }
    calcPotencia(){
      return console.log(Math.pow(parseInt(this.value1),parseInt(this.value2)))
    }
    limpiar(){
      this.value1 = null;
      this.value2 = null;
    }  
  }
  
  var potencia = new calculadora (10, 10)
  potencia.calcPotencia()
  potencia.limpiar()

  //Calculadora 2
    var potencia = new calculadora (10, 10)
    potencia.calcPotencia()
    potencia.limpiar()

    class cutronga extends calculadora {
    constructor(){
        super()
        this.value1 = prompt('Introduce un valor')
        this.value2 = prompt('Introduce un valor')
        }
    } 

    var valor = new cutronga;
    valor.calcSuma()