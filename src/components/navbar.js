import React from 'react';
import CaughtContext from "../contexts/caught"

const {useContext} = React;

const Navbar = () => {

    const { caughtPokemons } = useContext(CaughtContext); 

    console.log(caughtPokemons);

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (

        <nav>

            <div />

            <div>
                <img 
                src={imgUrl}
                alt="Logo Pokeapi"
                className='navbarImg'
                />
            </div>

            <div>
                <h1>Pokemones Atrapados:</h1>
                ✅ {caughtPokemons.length} </div>
            

        </nav>

    );

};

export default Navbar;