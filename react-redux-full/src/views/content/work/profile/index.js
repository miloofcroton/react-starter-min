import React from 'react';
import styled from 'styled-components';
import Bio from './bio';
import Topper from './topper';


const ProfileWrapper = styled.div`
  background-color: ${ ({ theme }) => theme.black};
  color: ${ ({ theme }) => theme.white};
  max-height: 1000px;
`;

const Profile = () => {

  return (
    <ProfileWrapper>
      <Topper/>
      <Bio/>
    </ProfileWrapper>
  );

};

export default Profile;
