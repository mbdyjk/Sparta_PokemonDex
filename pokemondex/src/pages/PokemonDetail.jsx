import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffe5b4; /* 연한 주황색 배경 */
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f6f6f6;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
  color: #ff0000; /* 빨간색 글씨 */
`;

const PokemonInfo = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;

const BackButton = styled.button`
  background-color: #000; /* 검은색 배경 */
  color: white; /* 흰 글씨 */
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  width: 100px;
  transition: background 0.2s;

  &:hover {
    background-color: #333; /* 살짝 연한 검은색 */
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
