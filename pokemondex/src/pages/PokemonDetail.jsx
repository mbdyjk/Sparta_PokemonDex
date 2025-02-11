import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffe5b4;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 500px;
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const PokemonName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #ff0000;
  margin-bottom: 10px;
`;

const PokemonInfo = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  width: 100px;
  transition: background 0.2s;

  &:hover {
    background-color: #333;
  }
`;

const PokemonDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pokemon = location.state; // 전달된 포켓몬 데이터 받기

  if (!pokemon) {
    return <PageContainer>포켓몬 정보가 없습니다.</PageContainer>;
  }

  return (
    <PageContainer>
      <DetailContainer>
        <PokemonImage src={pokemon.img_url} alt={pokemon.name} />
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonInfo>타입: {pokemon.types}</PokemonInfo>
        <PokemonInfo>{pokemon.description}</PokemonInfo>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </DetailContainer>
    </PageContainer>
  );
};

export default PokemonDetail;
