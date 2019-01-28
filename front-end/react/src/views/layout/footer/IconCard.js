import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLabel = styled.span`
  display: none;
`;

const IconWrapper = styled.li`
  display: inline;
  margin: 5px;
  list-style: none;
  font-size: 24px;

  a {
    color: black;
  }
`;

const IconCard = ({ detail }) => {

  return (
    <IconWrapper>
      <a
        href={detail.href}
        target="_blank" rel="noopener noreferrer"
        aria-label={detail.name}
      >
        <FontAwesomeIcon icon={detail.icon} />
        <IconLabel>{detail.name}</IconLabel>
      </a>
    </IconWrapper>
  );
};

export default IconCard;
