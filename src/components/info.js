import React from 'react';
import OnePokemon from './onePokemon';
import { useParams } from "react-router-dom";

const Pokedex = (props) => {

    const { pokemons, loading } = props;

    let params = useParams();

    let ID = params.pokemonId;

    const flautaPoke = pokemons[ID - 1];

    return (
        <div>
            <div className='header'>
                <h1>PokeInfo</h1>
                
            </div>

            {loading ? 

                <div> Loading... </div> 
                :
                <div className='pokedex-grid2'>
            
                    <OnePokemon pokemon={flautaPoke} key={flautaPoke.id} />
            
                </div>

            }

        </div>
    );

};

export default Pokedex;