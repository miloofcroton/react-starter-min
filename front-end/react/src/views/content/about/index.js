import React from 'react';
import styled from 'styled-components';
import Greeting from './Greeting';
import Text from './Text';

const AboutSection = styled.section`
  span {
    margin: 50px auto;
    font-size: 30px;
  }
  p {
    width: 60%;
    text-align: left;
    margin: 25px auto;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Greeting/>
      <Text/>
    </AboutSection>
  );
};

export default About;
