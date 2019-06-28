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
    var url = []
    pokemons.forEach(pokemon => {
        url = url.push(pokemon.url)     
    })
    return drawPokemons(url)
}

 function drawPokemons(url){
     url.forEach(u => {
        fetch(u.url)
        .then(response => response.json())
        .then( u => drawpoke)
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
  div.innerHTML = info;
}
window.addEventListener('load', () => init() );