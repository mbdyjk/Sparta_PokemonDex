import React, { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

export const usePokemon = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemons.length < 6) {
      const isExist = selectedPokemons.some(
        (selectedPokemon) => selectedPokemon.id === pokemon.id
      );

      if (isExist) {
        alert("포켓몬이 이미 추가되어 있습니다.");
      } else {
        setSelectedPokemons([...selectedPokemons, pokemon]);
      }
    } else {
      alert("포켓몬을 최대 6개까지 선택할 수 있습니다.");
    }
  };

  const removePokemon = (pokemonId) => {
    setSelectedPokemons(
      selectedPokemons.filter((pokemon) => pokemon.id !== pokemonId)
    );
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemons, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
