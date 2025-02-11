import React from "react";
import styled from "styled-components";
import MyList from "./MyList.jsx";
import PokemonList from "./PokemonList.jsx";
import MOCK_DATA from "../data/MOCK_DATA.js";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../store/pokemonSlice";

const DashboardContainer = styled.div`
  padding: 20px;
  background: #f7e5be;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;

const Dashboard = () => {
  // const [selectedPokemons, setSelectedPokemons] = useState([]);
  // redux 방식으로 변경하며 useState를 useSelector와 useDispatch로 변경
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );
  const dispatch = useDispatch();

  // redux 방식으로 변경하며 props를 store에 있는 slice로부터 가져온다.
  // const addPokemon = (pokemon) => {
  //   if (selectedPokemons.length < 6) {
  //     const isExist = selectedPokemons.some(
  //       (selectedPokemon) => selectedPokemon.id === pokemon.id
  //     );

  //     if (isExist) {
  //       alert("포켓몬이 이미 추가되어 있습니다.");
  //     } else {
  //       setSelectedPokemons([...selectedPokemons, pokemon]);
  //     }
  //   } else {
  //     alert("포켓몬을 최대 6개까지 선택할 수 있습니다.");
  //   }
  // };

  // const removePokemon = (pokemonId) => {
  //   setSelectedPokemons(
  //     selectedPokemons.filter((pokemon) => pokemon.id !== pokemonId)
  //   );
  // };

  return (
    <DashboardContainer>
      <MyList
        selectedPokemons={selectedPokemons}
        //removePokemon={removePokemon}
        removePokemon={(id) => dispatch(removePokemon(id))}
      />
      <PokemonList
        pokemons={MOCK_DATA}
        //addPokemon={addPokemon}
        addPokemon={(pokemon) => dispatch(addPokemon(pokemon))}
      />
    </DashboardContainer>
  );
};
export default Dashboard;
