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
        
        if(this.operator == 'sumar') alert(this.calcSuma(this.current, input.value))
        if(this.operator == 'restar') alert(this.calcResta(this.current, input.value)) 
        input.value = null

      });
      button3.innerText = "=";
      body.appendChild(button3);

    }

  }
  var calcular = new Visual()

  calcular.createCalculate()

//Tienda

class Store{
  constructor(store){
    this.name = this.store;
    this.opening = this.store.opening;
    this.close = this.store.close;   
  }
  close(hour){
    var h = new Date();
    var hours=h.getHours();
    if(hours == this.store.close){
       return alert('La tienda está cerrada')
    }
  }
  open(hour){
    var h = new Date();
    var hours=h.getHours();
    if(hours == this.store.opening){
      return alert('La tienda esta abierya')
    }
  }
}
class Product{
  constructor(product){
    this.name = this.product;
    this.price = this.product.price;
    this.stock =this.product.stock;
  }
}
class Person {
  constructor(person){
    this.name = this.person;

  }
}

class Client extends Person {
  constructor(currentMoney){
    super(this.person)
    this.currentMoney = this.person.currentMoney;
  }
  buy(product, number){
    if(this.currentMoney > product.price.number){
      var total = product.price.number;
      this.currentMoney = this.currentMoney - total;
      product.stock -= number;
      alert('Gracias por su compra')
    }else alert('No tienes dinero suficiente')
  }
}

class Worker extends Person{
  constructor(){
    super(this.person)
    this.position = this.person.position;
  }
  search(product, number){
    if(product.srock > number){
      alert('Aquí tiene su producto')
    } else alert('No queda stock')
    
  }
}

let tienda = {
   store: [
     new Store({name:'ZARA', opening:'9:00', close:'21:00'})
   ],  
  products: [
    new Product({name: 'camiseta', price: 10, stock: 20}),
    new Product({name: 'pantalones', price: 15, stok: 10}),
    new Product({name: 'falda', price: 20, stock: 0}),
    new Product({name: 'zapatos', price: 30, stock: 30}),
    new Product({name: 'camisas', price: 25, stock: 15 })   
  ]      
}
