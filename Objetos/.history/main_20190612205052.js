//1
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
  
  
  //2
  
  class Cutronga extends Calculadora {
    constructor(){
      super()
  
    }
    suma(){
      var value1 = prompt('Introduce un valor')
      var value2 = prompt('Introduce un valor')
      return alert(this.calcSuma(value1, value2))
    }
    resta(){
      var value1 = prompt('Introduce un valor')
      var value2 = prompt('Introduce un valor')
      return alert(this.calcResta(value1, value2))
    }
    Division(){
      var value1 = prompt('Introduce un valor')
      var value2 = prompt('Introduce un valor')
      return alert(this.calcDivision(value1, value2))
    }
    Multiplicar(){
      var value1 = prompt('Introduce un valor')
      var value2 = prompt('Introduce un valor')
      return alert(this.calcMultiplicacion(value1, value2))
    }
    Potencia(){
      var value1 = prompt('Introduce un valor')
      var value2 = prompt('Introduce un valor')
      return alert(this.calcPotencia(value1, value2))
    }
  } 
  
  var valor = new Cutronga();
  valor.suma()
  