import React from "react";
import styled from "styled-components";
import { CenterContainer } from "../styles/commonStyles.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDexClick = () => {
    navigate("/dex");
  };

  const HomeContainer = styled(CenterContainer)`
    background-color: #f9d7a1;
    flex-direction: column; /* 수직 방향 정렬 */
    text-align: center;
  `;

  const Button = styled.button`
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #cc0000;
    }
  `;

  return (
    <HomeContainer>
      <img
        src="/images/pokemonTitle.png"
        alt="Pokémon Title"
        style={{ marginBottom: "20px" }}
      />
      <Button onClick={handleDexClick}>포켓몬 도감 시작하기</Button>
    </HomeContainer>
  );
};

export default Home;
