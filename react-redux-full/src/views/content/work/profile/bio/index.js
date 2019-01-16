import React from 'react';
import styled from 'styled-components';
import ActivityList from './ActivityList';
import TechList from './TechList';

const BioWrapper = styled.div`

  margin: 20px;
  line-height: 2rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;

  svg {
    margin: 5px;
    font-size: 26px;
    color: ${ ({ theme }) => theme.darkgreen};
  }
`;

const topText = 'I strive to work in no-ego, productive environments on projects that push the needle. I am capable in a number of technologies, thanks to a curious mind, and have a solid foundation in math and science. Outside of technical expertise, I have a background in working on teams in high stress situations and communication in the public sector.';

const bottomText = 'A science and technology enthusiast, math inquisitor, competitive powerlifter, &amp; BJJ white belt, who loves camping and barbecuing, travels at random, does puzzles competitively, and follows football ardently.';

const Bio = () => {
  return (
    <BioWrapper>
      <p>{topText}</p>
      <TechList/>
      <p>{bottomText}</p>
      <ActivityList/>
    </BioWrapper>
  );
};

export default Bio;
