import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import Search from "./components/search";
import { getPokemons } from "./pokeApi";

const { useState } = React;

function App() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    } catch (error) {}
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>

      <Navbar />

      <div className="App">
          <Search />
          <Pokedex pokemons={pokemons} />
      </div>
    </div>
    
  );
}

export default App;
