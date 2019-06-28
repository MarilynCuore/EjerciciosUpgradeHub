const IVA = 21
class Product {
    constructor(id, name, img, price) {
        this.id = id
        this.name = name
        this.img = img
        this.price = price
    }
}

const products = [
    new Product(1,'iPhone', 'http://imagen', 600),
    new Product(2,'iPhone', 'http://imagen', 600),
    new Product(3,'iPhone', 'http://imagen', 600),
]

function init() {
   // Añadir productos al carrito
}

function removeProduct(id) {
    // Quitar el producto del array
}

function actualizarIconoCarrito() {
    // Modificar el numero del carrito segun los productos que haya en el carrito
}

function total() {
    // Calcular el total de precio del todos los articulos del carrito
    let subtotal = 0

    let total_iva = subtotal * (IVA / 100)

    let total = subtotal + total_iva
}


window.addEventListener('load', () => init() )