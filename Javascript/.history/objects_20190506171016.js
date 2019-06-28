let person = {
    nombre :  'Julian',
    apellido: 'García',
    edad: 3,
    fullname(){
        return nombre + apellido
    }
}

console.log(person.fullname())