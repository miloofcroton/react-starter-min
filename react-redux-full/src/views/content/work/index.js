import React from 'react';
import styled from 'styled-components';

import Profile from './profile';
import Projects from './projects';

const WorkWrapper = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  max-height: 1000px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Work = () => {
  return (
    <WorkWrapper>
      <Projects/>
      <Profile/>
    </WorkWrapper>
  );
};

export default Work;
