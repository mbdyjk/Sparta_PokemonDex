import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";

//const pokemonData = [];

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: #d1d1d1;
  border-radius: 5px;
  padding: 20px;
`;

const PokemonList = ({ pokemons }) => {
  const { addPokemon } = usePokemon();

  return (
    <List>
      {/* sample code */}
      {/* {pokemonData.map((data) => (
        <PokemonCard key={data.id} pokemon={data} />
      ))} */}
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
        />
      ))}
    </List>
  );
};

export default PokemonList;
