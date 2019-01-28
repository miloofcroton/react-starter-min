import React from 'react';
import styled from 'styled-components';
import TileList from './TileList';

const HomeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-grow: 1;
  padding: 50px;
  height: 100%;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0;

    span {
      display: inline-block;
    }
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <TileList/>
    </HomeSection>
  );
};

export default Home;
