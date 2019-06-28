function init() {
    showPokemons()
}

function showPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.JSON)
    .then(pokemons => draw)
    .catch(error => console.log(error))
}

let draw = function(pokemons){
    var url = []
    pokemons.forEach(pokemon => {
        url = pokemon.url      
    })
}
window.addEventListener('load', () => init() );