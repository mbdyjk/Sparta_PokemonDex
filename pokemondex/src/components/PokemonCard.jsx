import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const Name = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #cc0000;
  }
`;

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <Image src={pokemon.image} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <Button>추가</Button>
    </Card>
  );
};

export default PokemonCard;
