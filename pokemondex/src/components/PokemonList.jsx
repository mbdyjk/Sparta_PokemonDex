import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const pokemonData = [];

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const PokemonList = () => {
  return (
    <List>
      {pokemonData.map((data) => (
        <PokemonCard key={data.id} pokemon={data} />
      ))}
    </List>
  );
};

export default PokemonList;
