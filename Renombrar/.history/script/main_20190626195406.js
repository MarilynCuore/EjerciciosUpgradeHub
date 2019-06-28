
class Usuario {
    constructor(id, nombre, email, empresa, direccion){
        this._id = id;
        this._nombre = nombre;
        this._email = email;
        this._empresa = empresa;
        this._direccion = direccion;


    }
    draw(){
        console.log('hola me llamo' + this._nombre)

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
                this.añadirUsuario(usuario)
            });
        } )
        .catch(error => console.log(error))
       
    }
}
var miNuevaAgenda = new Agenda();

var usuarioDePrueba = new Usuario(10, 'Fran', 'fran@gmail.com', 'Minsait', 'Mi calle 240');
miNuevaAgenda.anadirUsuario(usuarioDePrueba);
miNuevaAgenda.rellenarDatosApi()
