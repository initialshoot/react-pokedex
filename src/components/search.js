import React from "react";
const { useState } = React;

const SearchBar = (props) => {

    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = async (e) => {
        onSearch(search);
    };

    return (
        
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search Pokemon" onChange={onChange} />
            </div>
            
            <div className="searchbar-btn">
                <button onClick={onClick}>Search</button>
            </div>

        </div>

    )
};

export default SearchBar;