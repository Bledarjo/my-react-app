import App from "../App"
import PokemonCard from "./PokemonCard"



function NavBar(props) {
  const handleClick =(index)=>{
   console.log(index);
   props.setPokemonIndex(index)

  
  }
  
   
  return(
    <>
  {props.animal.map((pokemons,index)=>
  
    <button
      key={index}
     name={pokemons.name}
     image={ pokemons.imgSrc}onClick={()=>handleClick(index)}> {pokemons.name}</button>
  )}
  
    </>
  )
}














// function Button(props) {
//     if(props.setButton===setpokemonIndex((pokemonList)=>pokemonList-1)){
//         return( <button  onClick={handlePreviousClick} disabled={pokemonIndex<=0}>Prècedent</button>)
//     }
// }

export default NavBar