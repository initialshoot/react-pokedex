import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Pokedex from "./components/pokedex";
import Search from "./components/search";
import { CaughtProvider } from "./contexts/caught";
import { getPokemonData, getPokemons, searchPokemon } from "./pokeApi";

const { useState, useEffect } = React;

const localStorageKey = "caught_pokemon";

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [caught, setCaught] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 24));
      setNotFound(false);
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
    if (!searching) {
      fetchPokemons();
    }
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

  const onSearch = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if(!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

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
          <Search onSearch={onSearch}/>
          {notFound ? (
          <div className="not-found-text">Pokemon not found.</div>)
          :(
          <Pokedex loading={loading} pokemons={pokemons} page={page} setPage={setPage} total={total} />  
          )}
      </div>

      <Footer />

    </div>
    </CaughtProvider>
  );
}

export default App;
