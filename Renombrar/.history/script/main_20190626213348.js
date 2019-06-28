class Company {
    constructor(nombre, frase, negocio){
        this._nombre = nombre;
        this._frase = frase;
        this._negocio = negocio;
    }
    pintar(){
        document.querySelector('#nombreEmpresa').innerText = this._nombre;
        document.querySelector('#fraseEmpresa').innerText = this._frase;
        document.querySelector('#negocioEmpresa').innerText = this._negocio;
    }
}
class Usuario {
    constructor(id, nombre, email, empresa, direccion){
        this._id = id;
        this._nombre = nombre;
        this._email = email;
        this._empresa = empresa;
        this._direccion = direccion;


    }
    draw(){
        const wrapper = document.querySelector('.table-wrapper');
        let html = `
            <div class="wrapper">
                <div>${this._id}</div>
                <div>${this._nombre}</div>
                <div>${this._email}</div>
                <button id="verEmpresa">Mostrar empresa</button>
                <button id="verDireccion">Mostrar dirección</button>
            </div>       
            `
        wrapper.innerHTML += html;
        wrapper.querySelector('#verEmpresa').addEventListener('click', ()=> {
            this._empresa.pintar();
        })
        

    }
    showCompany(){
        console.log('mi empresa es' + this._empresa)

    }
    showAdress(){
        console.log('mi dirección es' + this._direccion)
    }
}

class Agenda {
    constructor(){
        this.usuarios = [];

    }
    buscarUsuario(nombre){

    }
    anadirUsuario(usuario){
        this.usuarios.push(usuario)

    }
    rellenarDatosApi(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )
        .then(data => {
            data.forEach(element => {
                var empresa = new Company(element.company.name, element.company.catchPhrase, element.company.bs)
                var usuario = new Usuario(element.id, element.name, element.email, empresa, element.direccion)
                this.anadirUsuario(usuario)
                console.log(usuario)
            });
        } )
        .catch(error => console.log(error))
    }
    pintarListadoUsuarios(){
        this.usuarios.forEach(e => {
            e.draw()
        })
    }
}
var miNuevaAgenda = new Agenda();

var usuarioDePrueba = new Usuario(10, 'Fran', 'fran@gmail.com', 'Minsait', 'Mi calle 240');
miNuevaAgenda.anadirUsuario(usuarioDePrueba);
miNuevaAgenda.rellenarDatosApi();
setTimeout(()=> miNuevaAgenda.pintarListadoUsuarios(), 3000)
