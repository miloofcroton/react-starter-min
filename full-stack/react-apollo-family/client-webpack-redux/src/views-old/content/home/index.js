import React from 'react';
import styled from 'styled-components';
import Auth from './Auth';

const HomeSection = styled.section`
  /* add style */
`;

const Home = () => {
  return (
    <HomeSection>
      <p>This is the home page</p>
      <Auth />
    </HomeSection>
  );
};

export default Home;
