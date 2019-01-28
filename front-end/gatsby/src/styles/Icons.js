import React from 'react';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';

const IconImg = styled.img`
  width: 36px;
  height: 36px;
  margin: 5px;
  display: inline-block;
`;

const techPath = withPrefix('/tech/');

export const TechIcon = ({ tag }) => {

  const url = tag => {
    return techPath + tag.toLowerCase() + '.png';
  };

  return (
    <IconImg src={url(tag)} alt={tag} />
  );
};

// export const TechList = ({ techList }) => {

//   const techCards = techList.map(tech => {
//     return <TechIcon key={tech} tag={tech} />;
//   });

//   return (
//     <Fragment>{techCards}</Fragment>
//   );
// };
