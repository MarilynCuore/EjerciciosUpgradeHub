//1
class Calculadora {
    constructor(){
      this.resultado = [];
    }
    calcSuma(value1, value2){
       var as = parseInt(value1) + parseInt(value2);
       this.resultado.push(as);
       console.log(as);
       return as;
    }
    calcResta(value1, value2){
        var as = parseInt(this.value1) - parseInt(this.value2);
        this.resultado.push(as);
        console.log(as);
        return as;
    }
    calcDivision(value1, value2){
       var as = parseInt(this.value1) - parseInt(this.value2);
       this.resultado.push(as);
       console.log(as);
       return as;
    }
    calcMultiplicacion(value1, value2){
       var as =  parseInt(this.value1) - parseInt(this.value2);
       this.resultado.push(as);
       console.log(as);
       return as;
    }
    calcPotencia(value1, value2){
       var as = Math.pow(parseInt(this.value1),parseInt(this.value2);
       this.resultado.push(as);
       return as;
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
  
  console.log("hola!");
  var valor = new Cutronga();
  valor.suma()
  