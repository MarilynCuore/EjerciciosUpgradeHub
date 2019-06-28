function init() {
    showPokemons()
}

function showPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.JSON)
    .then(pokemons => poke)
    .catch(error => console.log(error))
}

let poke = function(pokemons){
    var url = []
    pokemons.forEach(pokemon => {
        url = pokemon.url      
    })
    return drawPokemons(url)
}

 function drawPokemons(url){
     url.forEach(u => {
        fetch(u.url)
        .then(response => response.JSON)
        .then( urls => drawpoke)
        .catch(error => console.log(error))
     })
}

let drawPoke = function(urls){


}
window.addEventListener('load', () => init() );