//Calculadora 1
class Calculadora {
    constructor(){
      this.resultado = [];
    }
    calcSuma(value1, value2){
       var as = parseInt(value1) + parseInt(value2);
       this.resultado.push(as);
       console.log(as);
    }
    calcResta(value1, value2){
       this.resultado.push(parseInt(this.value1) - parseInt(this.value2));
    }
    calcDivision(value1, value2){
       this.resultado.push(parseInt(this.value1) / parseInt(this.value2));
    }
    calcMultiplicacion(value1, value2){
       this.resultado.push(parseInt(this.value1) * parseInt(this.value2));
    }
    calcPotencia(value1, value2){
       this.resultado.push(Math.pow(parseInt(this.value1),parseInt(this.value2)))
    }
    
    getResultado() {
      return this.resultado;
    }
    
    limpiar(){
      this.resultado = []
    }  
  }
  
  
  var miCalculadora = new Calculadora();
  miCalculadora.calcSuma(20,10);
  
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