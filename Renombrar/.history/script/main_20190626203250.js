
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
            <div>${this._id}</div>
            <div>${this._name}</div>
            <div>${this._email}</div>
            <button>Mostrar empresa</button>
            <button>Mostrar direccion/button>
            `
        wrapper.innerHTML += html;

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
                var usuario = new Usuario(element.id, element.name, element.email, element.empresa, element.direccion)
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
