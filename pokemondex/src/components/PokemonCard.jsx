import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../store/pokemonSlice";

const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: #f6f6f6;
  text-align: center;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

const Number = styled.p`
  font-size: 11px;
  color: gray;
  margin: 10px 0;

  span {
    margin-right: 4px;
  }
`;

const Button = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #cc0000;
  }
`;

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/pokemon-detail?id=${pokemon.id}`, { state: pokemon });
  };

  const handleAddClick = (event) => {
    event.stopPropagation(); // Link 이벤트 전파 방지
    dispatch(addPokemon(pokemon));
  };

  const handleRemoveClick = (event) => {
    event.stopPropagation(); // Link 이벤트 전파 방지
    dispatch(removePokemon(pokemon.id));
  };

  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );
  const isSelected = selectedPokemons.some((p) => p.id === pokemon.id);

  return (
    <Card onClick={handleCardClick}>
      <Image src={pokemon.img_url} alt={pokemon.korean_name} />
      <Name>{pokemon.korean_name}</Name>
      <Number>
        <span>No.</span>
        {String(pokemon.id).padStart(3, "0")}
      </Number>

      {/* {addPokemon && <Button onClick={handleAddClick}>추가</Button>}
      {removePokemon && <Button onClick={handleRemoveClick}>삭제</Button>} */}
      {isSelected ? (
        <Button onClick={handleRemoveClick}>삭제</Button>
      ) : (
        <Button onClick={handleAddClick}>추가</Button>
      )}
    </Card>
  );
};

export default PokemonCard;
