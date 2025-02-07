import React from "react";
import styled from "styled-components";
import MyList from "./MyList.jsx";
import PokemonList from "./PokemonList.jsx";

const DashboardContainer = styled.div`
  padding: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <MyList />
      <PokemonList />
    </DashboardContainer>
  );
};

export default Dashboard;
