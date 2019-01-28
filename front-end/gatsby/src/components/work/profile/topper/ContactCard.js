import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkWrapper = styled.li`
  text-align: left;
  color: ${ ({ theme }) => theme.darkgreen};
  text-decoration: none;
  display: block;
`;

const ContactCard = ({ detail }) => {

  return (
    <LinkWrapper href={detail.href}>
      <FontAwesomeIcon icon={detail.icon} />
      {' '}
      {detail.username}
    </LinkWrapper>
  );
};

export default ContactCard;
