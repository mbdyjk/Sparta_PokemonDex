import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: #f6f6f6;
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
  return (
    <Card>
      <Image src={pokemon.img_url} alt={pokemon.korean_name} />
      <Name>{pokemon.korean_name}</Name>
      <Number>
        <span>No.</span>
        {String(pokemon.id).padStart(3, "0")}
      </Number>
      <Button>추가</Button>
    </Card>
  );
};

export default PokemonCard;
