import React from 'react';
import CaughtContext from "../contexts/caught"

const {useContext} = React;

const Navbar = () => {

    const { caughtPokemons } = useContext(CaughtContext); 

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
                <h1 className='caught-pokemon'>Caught Pokemons: ✅ {caughtPokemons.length}</h1>
                 </div>
            

        </nav>

    );

};

export default Navbar;