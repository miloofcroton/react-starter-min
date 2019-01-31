import React from 'react';
import Create from './create';
import List from './display';
import styled from 'styled-components';

const ThingsSection = styled.section`
  /* add style */
`;

const Things = () => {
  return (
    <ThingsSection>
      <Create/>
      <List/>
    </ThingsSection>
  );
};

export default Things;
