import React, { useContext } from "react";
import CaughtContext from "../contexts/caught";
import { useParams } from "react-router-dom";

const OnePokemon = (props) => {

    //console.log(props);

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

    const typeName = 
    pokemon.types.map((type) => {
        return type.type.name;
    });

    const abilities =
    pokemon.abilities.map((ability) => {
        return ability.ability.name;
    });

    const moves =
    pokemon.moves.map((move) => {
        return move.move.name;
    });

    const typeOne = typeName[0];
    const typeTwo = typeName[1];

    const getTypeImgOne = `https://veekun.com/dex/media/types/en/${typeOne}.png`;
    const getTypeImgTwo = `https://veekun.com/dex/media/types/en/${typeTwo}.png`;


    return (

        <div className="pokemon-card2" style={{background: bgColor[typeName[0]] || defaultBackground}}>

            <div className="pokemon-img-container2">
                <div>
                
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img2"/>
                <img src={pokemon.sprites.back_default} alt={pokemon.name} className="pokemon-img2"/>

                </div>

                <div>
                
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} className="pokemon-img2"/>
                <img src={pokemon.sprites.back_shiny} alt={pokemon.name} className="pokemon-img2"/>

                </div>
                
            </div>
            
            <div className="card-body info-poke">

                <div className="card-top">

                    <h3>{pokemon.name}</h3>

                </div>

                <div>
                
                    <div className="pokemon-type2">
                        <div>#{pokemon.id}</div>

                            <div className="type-img">
                                <img src={getTypeImgOne} alt={typeOne}></img>
                            </div>
                            <div className="type-img">
                                {typeTwo ? 
                                    (<img src={getTypeImgTwo} alt={typeTwo}></img>) :
                                    (<span></span>)
                                }
                            </div>    
                    </div>

                    
                </div>
                <div>
                    <div>Weight: {pokemon.weight}</div>
                    <div>Height: {pokemon.height}</div>
                    <div>Base Experience: {pokemon.base_experience}</div>
                    <div>Abilities:</div>
                    <ul className="abilities">
                        <li>{abilities[0]}</li> 
                        {abilities[1] ? 
                            (<li>{abilities[1]}</li>) :
                            (<span></span>)
                        }
                    </ul>
                </div>
            
            </div>

                <div className="card-body2 info-poke">
                    <div>Moves: </div>
                        <ul className="abilities">
                                <li>{moves[0]}</li>
                                <li>{moves[1]}</li>
                                <li>{moves[2]}</li>
                                <li>{moves[3]}</li>
                        </ul>
                </div>

            <div>
                
            </div>

            <div className="card-bottom2">
                        
                        <button onClick={catchPokemon}>
                            <div className="pokemon-favorite">{caughtCount}</div>
                        </button>
            </div>

        </div>
    );
};

export default OnePokemon;