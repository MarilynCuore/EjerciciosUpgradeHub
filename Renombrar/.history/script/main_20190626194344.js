
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
        usuarios.push(usuario)

    }
    rellenarDatosApi(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )
        .then(function(data){
            data.forEach(element => {
                var userData = element
                var usuario = new Usuario(userData.id, userData.name, userData.email, userData.empresa, userData.direccion)
                this.añadirUsuario
            });
        } )
        .catch(error => console.log(error))
       
    }
}
var miNuevaAgenda = new Agenda();

var usuarioDePrueba = new Usuario(10, 'Fran', 'fran@gmail.com', 'Minsait', 'Mi calle 240');
miNuevaAgenda.anadirUsuario(usuarioDePrueba);