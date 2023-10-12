const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
function PokemonCard() {
 const pokemon=pokemonList[1]
 if (pokemon.imgSrc!=null){
    return(
        <>
        <p>{pokemon.name }</p>
        <p></p>
        <img src= {pokemon.imgSrc}></img>
        </>
    )
 }
 return(
        <>
        <p>???</p>
        </>
 )


}

export default PokemonCard