class Product {
    constructor(name, img, price) {
        this.name = name
        this.img = img
        this.price = price
    }
}

const products = [
    new Product('iPhone', 'http://imagen', 600),
    new Product('iPhone', 'http://imagen', 600),
    new Product('iPhone', 'http://imagen', 600),
]

function init() {
    alert("La pagina ha sido cargada")
}


window.addEventListener('load', () => init() )