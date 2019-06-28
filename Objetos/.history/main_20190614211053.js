// //1
// class Calculadora {
//     constructor(){
//       this.resultado = [];
//     }
//     calcSuma(value1, value2){
//        var as = parseInt(value1) + parseInt(value2);
//        this.resultado.push(as);
//        console.log(as);
//        return as;
//     }
//     calcResta(value1, value2){
//         var as = parseInt(value1) - parseInt(value2);
//         this.resultado.push(as);
//         console.log(as);
//         return as;
//     }
//     calcDivision(value1, value2){
//        var as = parseInt(value1) / parseInt(value2);
//        this.resultado.push(as);
//        console.log(as);
//        return as;
//     }
//     calcMultiplicacion(value1, value2){
//        var as =  parseInt(value1) * parseInt(value2);
//        this.resultado.push(as);
//        console.log(as);
//        return as;
//     }
//     calcPotencia(value1, value2){
//        var as = Math.pow(parseInt(value1),parseInt(value2));
//        this.resultado.push(as);
//        return as;
//     }
    
//     getResultado() {
//       return this.resultado;
//     }
    
//     limpiar(){
//       this.resultado = []
//     }  
//   }
  
  
//   var miCalculadora = new Calculadora();
//   miCalculadora.calcSuma(20,10);
  
  
//   //2
  
//   class Cutronga extends Calculadora {
//     constructor(){
//       super()
  
//     }
//     suma(){
//       var value1 = prompt('Introduce un valor')
//       var value2 = prompt('Introduce un valor')
//       return alert(this.calcSuma(value1, value2))
//     }
//     resta(){
//       var value1 = prompt('Introduce un valor')
//       var value2 = prompt('Introduce un valor')
//       return alert(this.calcResta(value1, value2))
//     }
//     Division(){
//       var value1 = prompt('Introduce un valor')
//       var value2 = prompt('Introduce un valor')
//       return alert(this.calcDivision(value1, value2))
//     }
//     Multiplicar(){
//       var value1 = prompt('Introduce un valor')
//       var value2 = prompt('Introduce un valor')
//       return alert(this.calcMultiplicacion(value1, value2))
//     }
//     Potencia(){
//       var value1 = prompt('Introduce un valor')
//       var value2 = prompt('Introduce un valor')
//       return alert(this.calcPotencia(value1, value2))
//     }
//   } 
  
//   // console.log("hola!");
//   // var valor = new Cutronga();
//   // valor.suma()

//   //3
//   class Visual extends Calculadora{
//     constructor(){
//       super()
//       this.current = 0
//       this.operator 
//     }
//     createCalculate(){
//       var body = document.querySelector('body');
//       var input = document.createElement('input');
//       body.appendChild(input);

//       var button = document.createElement('button');
//       button.innerText = '+';
//       button.addEventListener("click", () => {
//         this.operator = 'sumar'
//         this.current = this.calcSuma(this.current, input.value)
//         input.value = null
//       });
//       body.appendChild(button);

//       var button2 = document.createElement('button');
//       button2.addEventListener("click", () => {
//         this.operator = 'restar'
//         if(this.current == 0) {
//           this.current = input.value
//         }else {
//           this.current = this.calcResta(this.current , input.value)
//         }
//         input.value = null 
//       });
//       button2.innerText = "-";
//       body.appendChild(button2);

//       var button3 = document.createElement('button');
//       button3.addEventListener("click", () => {
        
//         if(this.operator == 'sumar') alert(this.calcSuma(this.current, input.value))
//         if(this.operator == 'restar') alert(this.calcResta(this.current, input.value)) 
//         input.value = null

//       });
//       button3.innerText = "=";
//       body.appendChild(button3);

//     }

//   }
//   var calcular = new Visual()

//   calcular.createCalculate()

//Tienda
//Clase tienda
class Store{
  constructor(store){
    this.name = store;
    this.opening = store.opening;
    this.close = store.close;
    this.cash = store.cash;
    setInterval(this.closeStore(), 5000);
    setInterval(this.openStore(), 5000);
    this.products = [];
    this.clients = [];
    this.workers = [];
  }
  //Metodo cerrar tienda
  closeStore(){
    var h = new Date();
    var hours=h.getHours();
    if(hours == this.close){
       return alert('La tienda está cerrada')
    }
  }
  //Metodo abrir tienda
  openStore(){
    var h = new Date();
    var hours=h.getHours();
    if(hours == this.open){
      return alert('La tienda esta abierya')
    }
  }
  //Metodo añadir producto
  addProduct(product){
    this.products.push(product)
  }
  contract(worker){
    this.workers.push(worker);
  }
  newClient(client){
    this.clients.push(client);
  }
  sell(product, number){
    this.products.forEach(p => {
      if(p.name === product){
        if( p.stock > number){
          var total = (p.price * number);
          this.cash += total;
          p.stock -= number;
          alert('Gracias por su compra');
        } else alert('No hay stock suficiente')            
      }         
    });   
  }
}
class Product{
  constructor(product){
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
  }
}
class Person {
  constructor(person){
    this.name = person.name;
  }
}

class Client extends Person {
  constructor(person, currentMoney){
    super(person)
    this.currentMoney = this.currentMoney;
  }
  buy(product, number, price){
    for(var p of this.products){
        if(this.currentMoney > (p * price * number)){
          var total = p.price * number;
          this.currentMoney -= total;
          alert('Gracias por su compra')
        } else alert('No tienes dinero suficiente')
      }  
  }
}

class Worker extends Person{
  constructor(person, position){
    super(person)
    this.position = position;
  }
  // search(product, number){
  //   if(product.stock > number){
  //     alert('Aquí tiene su producto')
  //   } else alert('No queda stock')   
  // }
}

var zara = new Store({name:'ZARA', opening:'9:00', close:'21:00', cash: 0,}); 

var camiseta = new Product({name: 'camiseta', price: 20, stock: 9});
var pantalones = new Product({name: 'pantalones', price: 15, stock: 10});
var falda = new Product({name: 'falda', price: 20, stock: 0});
var zapatos = new Product({name: 'zapatos', price: 30, stock: 30});
var camisas = new Product({name: 'camisas', price: 25, stock: 15 });
var laura = new Client({name: 'Laura', currentMoney: 300 });

zara.addProduct(camiseta);
zara.addProduct(pantalones);
zara.addProduct(falda);
zara.addProduct(zapatos);
zara.addProduct(camisas);
zara.newClient(laura);

zara.sell('camiseta', 1);