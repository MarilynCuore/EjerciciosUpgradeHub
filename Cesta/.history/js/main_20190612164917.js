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
    new Product(1,'iPhoneXs Pink', 'https://upload.wikimedia.org/wikipedia/commons/3/33/IPhone_7_-_A1778_Rose_Gold_-_Back_Right_-_Transparent_BG_no_shadow.png', 600),
    new Product(2,'Xpres Glow', 'https://djgc3ak02fkyp.cloudfront.net/media/catalog/product/cache/1/small_image/672x/602f0fa2c1f0d1ba5e241f914e856ff9/x/p/xpress_glow_1_.png', 20),
]
const carrito = [] 

// Init
function init() {
    draw() 
}

function draw() {
    const wrapper = document.querySelector("#products")
    wrapper.innerHTML = 
        `
        <div class="section-one__products-wrapper">
            <div class="section-one__products-wrapper_img">
                <img src="${products[0].img}"
                    alt="">
            </div>
            <div class="section-one__products-wrapper_info">
                <div class="section-one__products_info">
                    <p>${products[0].name}</p>
                    <p>$${parseFloat(products[0].price)}</p>
                </div>
                <div class="product__wrapper_add">
                    <button onclick="addProduct(${products[0].id})"> <span class="fas fa-check"></span></button>
                </div>
            </div>
            <div class="section-one__products-wrapper_img">
            <img src="${products[1].img}"
                alt="">
            </div>
                <div class="section-one__products-wrapper_info">
            <div class="section-one__products_info">
                <p>${products[1].name}</p>
                <p>$${parseFloat(products[1].price)}</p>
            </div>
            <div class="product__wrapper_add">
                <button onclick="addProduct(${products[1].id})"> <span class="fas fa-check"></span></button>
            </div>
        </div>
        </div>
        `
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
    subtotale.innerText = subtotal;
    // Calcular el total IVA
    let total_iva = subtotal * (IVA / 100);
    //Meter en el IVA
    let tax = document.getElementById('tax');
    tax.innerText = total_iva;
    // Calcular TOTAL
    let total = subtotal + total_iva;
    //Meter en el total
    let totalE  = document.getElementById('total');
    totalE.innerText = total;
}

window.addEventListener('load', () => init() )