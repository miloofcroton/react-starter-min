import React from 'react';
import Create from './Create';
import List from './List';
import styled from 'styled-components';

const ItemsSection = styled.section`
  /* add style */
`;

const Items = () => {
  return (
    <ItemsSection>
      <Create/>
    </ItemsSection>
  );
};

export default Items;
