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