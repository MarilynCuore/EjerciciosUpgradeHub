const IVA = 21
class Product {
    constructor(id, name, img, price) {
        this.id = id
        this.name = name
        this.img = img
        this.price = price
        this.comprado = false
    }
}

const products = [
    new Product(1,'Moisturizer', 'https://www.lusterspink.com/productimages/5121-R-pc.png', 50),
    new Product(2,'Xpres Glow', 'https://djgc3ak02fkyp.cloudfront.net/media/catalog/product/cache/1/small_image/672x/602f0fa2c1f0d1ba5e241f914e856ff9/x/p/xpress_glow_1_.png', 20),
    new Product(3,'Jojobo Oil', 'https://www.lusterspink.com/productimages/519-pc.png', 10),
    new Product(3,'Hair Lotion', 'https://www.lusterspink.com/productimages/506-pc.png', 15),
]
const carrito = [] 

// Init
function init() {
    draw() 
}

function draw() {
    const wrapper = document.querySelector("#products")
    let products_string = ''
    products.forEach(producto => {
        products_string +=  `
        <div class="section-one__products-wrapper">
            <div class="section-one__products-wrapper_img">
                <img src="${producto.img}"
                    alt="">
            </div>
            <div class="section-one__products-wrapper_info">
                <div class="section-one__products_info">
                    <p>${producto.name}</p>
                    <p>$${parseFloat(producto.price)}</p>
                </div>
                <div class="product__wrapper_add">
                    <button onclick="addProduct(${producto.id})"> <span class="fas fa-check"></span></button>
                </div>
            </div>
        </div>
        `
    })
    wrapper.innerHTML = products_string
       
}
//Añadir cosas al carrito
function addProduct(id) {
    products.forEach(item =>{
        debugger
        if(item.id == id){
            carrito.push(item.price);
        }
    })
    actualizarIconoCarrito(carrito);
    total();
}
//Actualizar Carrito
function actualizarIconoCarrito(carrito) {
    //Calcular numero de productos
    var total = carrito.length;
    var span = document.getElementById('totalShop');
    span.innerText = total;
}

function total() {
    // Calcular el total de precio del todos los articulos del carrito
    let subtotal = 0;
    carrito.forEach(item =>{
        subtotal += item
    });
    //Meter en el subtotal
    let subtotale = document.getElementById('subtotal');
    subtotale.innerText = parseInt(subtotal).toFixed(2);
    // Calcular el total IVA
    let total_iva = subtotal * (IVA / 100);
    //Meter en el IVA
    let tax = document.getElementById('tax');
    tax.innerText = parseInt(total_iva).toFixed(2);
    // Calcular TOTAL
    let total = subtotal + total_iva;
    total; 
    //Meter en el total
    let totalE  = document.getElementById('total');
    totalE.innerText = parseInt(total).toFixed(2);

}

window.addEventListener('load', () => init() )