let person = {
    nombre :  'Julian',
    apellido: 'García',
    edad: 3,
    fullname(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(person.fullname())


let job = {
    salario: 800,
    horario: 8,
    puesto: 'becaria'
}

//ES5
let Julito = Object.assign(person, job)
console.log(Julito)

//ES6
let Julian = {...person, ...job}
console.log(Julian)

let empleados = {
    backend : 'Marcos',
    frontend: 'Eduardo',
    cto : 'Enrique',
    becaria : 'Marilyn'
}
console.log(Object.keys(empleados))
console.log(Object.values(empleados))
console.log(empleados.backend)
console.log(empleados['backend'])

const saludo = ({nombre, puesto}) => {
    console.log(`Hola me llamo ${nombre} y soy ${puesto}`)
}

for(let key of Object.keys(empleados)) {

    const empleado = {
        nombre: empleados[key],
        puesto: key,
        despedido: false 
    }
    saludo(empleado)
}
console.log( empleados.hasOwnProperty('backend'))

