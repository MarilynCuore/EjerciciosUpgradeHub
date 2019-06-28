let person = {
    nombre :  'Julian',
    apellido: 'García',
    edad: 3,
    fullname(nombre, apellido){
        return nombre + ' ' + apellido
    }
}

console.log(person.fullname('Adrian','Mazrquez'))