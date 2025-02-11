import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard.jsx";
import { usePokemon } from "../context/PokemonContext.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removePokemon } from "../store/pokemonSlice";

const MyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #ff0000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SlotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const Slot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  border: 2.5px dashed lightgray;
  border-radius: 5px;
  flex: 1 1 ${({ count }) => `calc(100%/${count})`};
  aspect-ratio: 1;
  background-color: white;
`;

const Pokeball = styled.img`
  width: 50px;
  height: 50px;
`;

const MyList = () => {
  //const { selectedPokemons, removePokemon } = usePokemon();
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );
  const dispatch = useDispatch();

  const slotCount = 6;

  return (
    <MyListContainer>
      <Title>나만의 포켓몬</Title>
      <SlotContainer>
        {Array.from({ length: slotCount }).map((_, index) => (
          // key를 통해 list item 고유 식별
          <Slot key={index} count={slotCount}>
            {selectedPokemons[index] ? (
              <PokemonCard
                key={selectedPokemons[index].id}
                pokemon={selectedPokemons[index]}
                //removePokemon={removePokemon}
                removePokemon={() =>
                  dispatch(removePokemon(selectedPokemons[index].id))
                }
              />
            ) : (
              <Pokeball src="/images/pokeBall.png" alt="Pokeball" />
            )}
          </Slot>
        ))}
      </SlotContainer>
    </MyListContainer>
  );
};

export default MyList;
