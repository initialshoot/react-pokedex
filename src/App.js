import React from "react";
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import Search from "./components/search";
import { getPokemonData, getPokemons } from "./pokeApi";

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data.results)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      console.log(results)
      setPokemons(results)
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
          { loading ? (
            <div>Loading...</div>
          ) : (
            <Pokedex pokemons={pokemons} />
          )}
          
      </div>

    </div>
    
  );
}

export default App;
