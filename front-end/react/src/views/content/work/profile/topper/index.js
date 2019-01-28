import React from 'react';
import styled from 'styled-components';
import ProfPic from './ProfPic';
import ContactList from './ContactList';

const TopperWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
`;

const Topper = () => {

  return (
    <TopperWrapper>
      <ProfPic/>
      <ContactList/>
    </TopperWrapper>
  );
};

export default Topper;
