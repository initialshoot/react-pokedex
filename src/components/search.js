import React from "react";
import CaughtContext from "../contexts/caught"

const { useState } = React;

const {useContext} = React;

const SearchBar = (props) => {

    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value.lenght === 0) {
            onSearch(null);
        }
    }

    const onClick = async (e) => {
        onSearch(search);
    };

    const { caughtPokemons } = useContext(CaughtContext); 

    return (
        
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search Pokemon" onChange={onChange} />
            </div>
            
            <div className="searchbar-btn">
                <button onClick={onClick}>Search</button>
            </div>

            <div>
                <h1 className='caught-pokemon'>Caught Pokemons: ✅ {caughtPokemons.length}</h1>
            </div>

        </div>

    )
};

export default SearchBar;