import React from "react";
import { searchPokemon } from '../pokeApi';
const { useState } = React;

const SearchBar = () => {
    let [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const onChange = (evt) => {
        setSearch(evt.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
        console.log(pokemon);
    };

    return (
        
        <div>
            <div>
                <input
                    placeholder="Search Pokemon"
                    onChange={onChange}
                />
            </div>
            
            <div>
                <button onClick={onClick}>Search</button>
            </div>

        </div>

    )
};

export default SearchBar;