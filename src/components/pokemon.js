import React, { useContext } from "react";
import CaughtContext from "../contexts/caught";

const Pokemon = (props) => {

    const { pokemon } = props;
    const { caughtPokemons, updateCaughtPokemon } = useContext(CaughtContext);

    const alreadyCaught = "✅";
    const notCaught = "❎";
    const caughtCount = caughtPokemons.includes(pokemon.name) ? alreadyCaught : notCaught;

    const catchPokemon = (e) => {
        e.preventDefault();
        updateCaughtPokemon(pokemon.name);
    }

    return (

        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img"/>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>  
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return <div key={idx} className="pokemon-type-text">{type.type.name}</div>;
                        })}
                    </div>

                    <button onClick={catchPokemon}>
                        <div className="pokemon-favorite">{caughtCount}</div>
                    </button>
                        
                </div>
            </div>
        </div>
    );
};

export default Pokemon;