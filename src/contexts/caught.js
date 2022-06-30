import React from "react";

const CaughtContext = React.createContext({
    caughtPokemons: [],
    updateCaughtPokemon: (id) => null
});

export const CaughtProvider = CaughtContext.Provider;

export default CaughtContext;