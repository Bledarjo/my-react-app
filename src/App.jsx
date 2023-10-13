import { useState } from "react";

import PokemonCard from './components/PokemonCard'
import './App.css'


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];




function App() {
  const [pokemonIndex,setpokemonIndex]=useState(0);
  
 const [disabled,setdisabled]=useState(false)

  const handlePreviousClick =() =>{
    setpokemonIndex((pokemonList)=>pokemonList-1)
    // if (disabled == pokemonList[0]){
    // setdisabled(true)
  }
     
  const handleNextClick=()=>{
    setpokemonIndex((pokemonList)=>pokemonList+1)}
    // if(setdisabled== pokemonList[4]){
    //   setdisabled(true)
    
   
  return (
    
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
       <button  onClick={handlePreviousClick} disabled={pokemonIndex<=0}>Prècedent</button>
       <button  onClick={handleNextClick} disabled={pokemonIndex>=4}>Suivant</button>
        
      </div>
       
    
  );
}

export default App
