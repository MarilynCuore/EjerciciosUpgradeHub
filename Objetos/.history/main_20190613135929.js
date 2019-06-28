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
        var as = parseInt(value1) - parseInt(value2);
        this.resultado.push(as);
        console.log(as);
        return as;
    }
    calcDivision(value1, value2){
       var as = parseInt(value1) / parseInt(value2);
       this.resultado.push(as);
       console.log(as);
       return as;
    }
    calcMultiplicacion(value1, value2){
       var as =  parseInt(value1) * parseInt(value2);
       this.resultado.push(as);
       console.log(as);
       return as;
    }
    calcPotencia(value1, value2){
       var as = Math.pow(parseInt(value1),parseInt(value2));
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
  
  // console.log("hola!");
  // var valor = new Cutronga();
  // valor.suma()

  //3
  class Visual extends Calculadora{
    constructor(){
      super()
      this.current = 0
      this.operator 
    }
    createCalculate(){
      var body = document.querySelector('body');
      var input = document.createElement('input');
      body.appendChild(input);

      var button = document.createElement('button');
      button.innerText = '+';
      button.addEventListener("click", () => {
        this.operator = 'sumar'
        this.current = this.calcSuma(this.current, input.value)
        input.value = null
      });
      body.appendChild(button);

      var button2 = document.createElement('button');
      button2.addEventListener("click", () => {
        this.operator = 'restar'
        if(this.current == 0) {
          this.current = input.value
        }else {
          this.current = this.calcResta(this.current , input.value)
        }
        input.value = null 
      });
      button2.innerText = "-";
      body.appendChild(button2);

      var button3 = document.createElement('button');
      button3.addEventListener("click", () => {
        if(this.operator == 'sumar') this.current = this.calcSuma(this.current, input.value)
        if(this.operator == 'restar') this.current = this.calcResta(this.current, input.value)
        input.value = null
        alert(this.current)
      });
      button3.innerText = "=";
      body.appendChild(button3);

    }

  }
  var calcular = new Visual()

  calcular.createCalculate()

//Tienda

class Tienda {
    constructor(){
        this.nombre = this.nombre;
        this.producto = this.producto;
        this.empleados = this.empleados;
        this.horario = this.horario;
        this.clientes = this.clientes;
    }
}

class Person extends Tienda {
    constructor(name){
        super(name)
    }
}