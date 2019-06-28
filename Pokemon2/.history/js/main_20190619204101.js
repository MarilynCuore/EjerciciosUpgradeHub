function showPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(pokemons => draw(pokemons))
        .catch(error => alert(error))


}