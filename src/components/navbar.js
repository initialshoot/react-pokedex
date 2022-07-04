import React from 'react';


const Navbar = () => {

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (

        <nav>

                <div className='options'>

                    <a className='home-btn' href="/">
                        <img 
                        src={imgUrl}
                        alt="Logo Pokeapi"
                        className='navbarImg'
                        />
                    </a>

                    <a href="/" className='hover-underline-animation'>
                        Home
                    </a>

                    <a href="/pokemons" className='hover-underline-animation'>
                        Pokemons
                    </a>

                    <a href="/about" className='hover-underline-animation'>
                        About
                    </a>

                </div>

        </nav>

    );

};

export default Navbar;