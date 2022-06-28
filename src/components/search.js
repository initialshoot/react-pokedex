import React from "react";
const {useState} = React;

const SearchBar = () => {
    let [search, setSearch] = useState('');

    const onChange = (evt) => {
        setSearch(evt.target.value);
    }

    const onClick = (e) => {
        console.log('apretado');
    }

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