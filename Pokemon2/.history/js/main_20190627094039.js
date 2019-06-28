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
        let pokemonsPromise = []
        urls.forEach(url => {
            pokemonsPromise.push(fetch(url))
        })
        Promise.all(pokemonsPromise)
            .then(responsePokemons => {
                responsePokemons.forEach( response => {
                   response.json().then(p => drawPoke(p))
                })
            })


    //  urls.forEach(u => {
    //     fetch(u)
    //     .then(response => response.json())
    //     .then( p => drawPoke(p))
    //     .catch(error => alert(error))
     
    //  })
}

let drawPoke = function(p){
  const div = document.querySelector('.wrapper-pokemon');
  div.classList.remove('hidden');
  let info = `
    <div class="pokemon">
        <img src="${p.sprites.back_default}">
        <p> Peso : ${p.weight}</p>
        <p> ${p.name} ${p.id}</p>
        <p> Altura: ${p.height}</p>
    </div>
  `;
  div.innerHTML += info;
}
window.addEventListener('load', () => init() );