function alertPokemon(){
    const pokeTextField = document.getElementById("pokemon-textField").value.toLowerCase();

    if(!pokeTextField){
        alert(`Please enter a pokemon.`);
        return;
    }

    // si source 
    const pokeAPIURL = `https://pokeapi.co/api/v2/pokemon/${pokeTextField}`;

    // si parokya
    fetch(pokeAPIURL)
    .then(dataResponse => {
        if(!dataResponse.ok){
            throw new Error(`Pokemon Not Found: ${pokeTextField}`);
        }
        return dataResponse.json();
    })
    .then(data => {
        alert(`Found Pokemon: ${data.name}`);
    })
    .catch(error => {
        console.error("Erratas", error);
        alert(`Cannot find the PokeData of ${pokeTextField}`);
    });
}