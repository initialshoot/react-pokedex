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
        
        <div className="searchbar-container">
            <div className="searchbar">
                <input
                    placeholder="Search Pokemon"
                    onChange={onChange}
                />
            </div>
            
            <div className="searchbar-btn">
                <button onClick={onClick}>Search</button>
            </div>

        </div>

    )
};

export default SearchBar;