import React from "react";
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import Search from "./components/search";
import { CaughtProvider } from "./contexts/caught";
import { getPokemonData, getPokemons } from "./pokeApi";

const { useState, useEffect } = React;

const localStorageKey = "caught_pokemon";

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [caught, setCaught] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25))
    } catch (error) {}
  }

  const loadCaughtPokemons = () => {
    const pokemons = 
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setCaught(pokemons);
  };

  useEffect(() => {
    loadCaughtPokemons();
  }, [])

  useEffect(() => {
    console.log('Fetching all the pokemons');
    fetchPokemons();
  }, [page]);

  const updateCaughtPokemon = (name) => {
    const updated = [...caught];
    const isCaught = caught.indexOf(name);
    if(isCaught >= 0) {
      updated.splice(isCaught, 1);
    } else {
      updated.push(name);
    }
    setCaught(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  }

  return (

    <CaughtProvider 
      value={{
        caughtPokemons: caught, 
        updateCaughtPokemon: updateCaughtPokemon
      }} 
    >
    
    <div>

      <Navbar />

      <div className="App">
          <Search />
            <Pokedex loading={loading} pokemons={pokemons} page={page} setPage={setPage} total={total} />  
      </div>

    </div>
    </CaughtProvider>
  );
}

export default App;
