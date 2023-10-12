

function PokemonCard (props){
    console.log(props)
 
 if (props.pokemon.imgSrc!=null)
    {
        return(
                
                <>
                <p>{props.pokemon.name}</p>
                
                <img src= {props.pokemon.imgSrc}/>
                </>
            );
     }
 
    
        return(
                <>
                    <p>???</p>
                </>
            );

 
    
}
export default PokemonCard