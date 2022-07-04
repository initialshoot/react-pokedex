import React from 'react';

const Navbar = () => {

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (

        <nav>

            <div>

                <button className='home-btn'>
                    <img 
                    src={imgUrl}
                    alt="Logo Pokeapi"
                    className='navbarImg'
                    />
                </button>
                
            </div>
            

        </nav>

    );

};

export default Navbar;