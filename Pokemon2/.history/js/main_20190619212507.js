function init() {
    showPokemons()
}

function showPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(pokemons => poke(pokemons))
    .catch(error => alert(error))
}

let poke = function(pokemons){
    var urls = []
    pokemons.results.forEach(pokemon => {
        urls.push(pokemon.url)
    })
    drawPokemons(urls)
}

 function drawPokemons(urls){
     urls.forEach(u => {
        fetch(u)
        .then(response => response.json())
        .then( u => drawPoke(u))
        .catch(error => alert(error))
     })
}

let drawPoke = function(u){
  const div = document.querySelector('.wrapper-pokemon');
  div.classList.remove('.hidden');
  let info = `
    <img src="${u.sprites.back_default}">
    <p>${u.weight}</p>
  `;
  div.innerHTML += info;
}
window.addEventListener('load', () => init() );