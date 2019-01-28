import React, { Fragment } from 'react';
import styled from 'styled-components';
import { TechIcon } from '../../../../styles/Icons';

const TagBox = styled.div`
  display: inline-block;
  margin: 10px;
`;

const Tag = styled.p`
  display: block;
  margin: 0px auto;
`;

const TechList = ({ techList }) => {

  const techCards = techList.map(tech => {
    return (
      <TagBox key={tech}>
        <TechIcon
          tag={tech}
        />
        <Tag>{tech}</Tag>
      </TagBox>
    );
  });

  return (
    <Fragment>
      {techCards}
    </Fragment>
  );
};

export default TechList;
