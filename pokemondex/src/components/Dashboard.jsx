import React from "react";
import styled from "styled-components";
import MyList from "./MyList.jsx";
import PokemonList from "./PokemonList.jsx";
import MOCK_DATA from "../data/MOCK_DATA.js";
import { useState } from "react";

const DashboardContainer = styled.div`
  padding: 20px;
  background: #f7e5be;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;

const Dashboard = () => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemons.length < 6) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
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
    <DashboardContainer>
      <MyList
        selectedPokemons={selectedPokemons}
        removePokemon={removePokemon}
      />
      <PokemonList pokemons={MOCK_DATA} addPokemon={addPokemon} />
    </DashboardContainer>
  );
};
export default Dashboard;
