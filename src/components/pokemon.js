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

    const bgColor = {
        "normal": '#a8a878',
        "fighting": '#903028',
        "flying": '#a890f0',
        "poison": '#a040a0',
        "ground": '#e0c068',
        "rock": '#b8a038',
        "bug": '#a8b820',
        "ghost": '#705898',
        "steel": '#b8b8d0',
        "fire": '#f05030',
        "water": '#6890f0',
        "grass": '#78c850',
        "electric": '#f8d030',
        "psychic": '#f85888',
        "ice": '#98d8d8',
        "dragon": '#7038f8',
        "dark": '#705848',
        "fairy": '#f8a0e0',
        "unknown": '#68a090',
        "shadow": '#403246'
    };

    const defaultBackground = 'white';

    const typeColor = 
    pokemon.types.map((type) => {
        return type.type.name;
    });

    return (

        <div className="pokemon-card" style = {{background: bgColor[typeColor[0]] || defaultBackground}}>
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