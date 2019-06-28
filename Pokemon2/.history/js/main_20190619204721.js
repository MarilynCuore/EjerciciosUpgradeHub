function showPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.JSON)
    .then(pokemons => draw)
    .catch(error => console.log(error))
}

let draw = function(pokemons){
    pokemons.forEach(pokemon => {
        
    })

}