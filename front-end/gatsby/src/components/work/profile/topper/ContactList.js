import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';

const ContactListWrapper = styled.ul`
  margin-left: 10px;
`;

const details = [
  {
    username: 'miloofcroton',
    icon: ['fab', 'github'],
    href: 'https://github.com/miloofcroton'
  },
  {
    username: 'JackToumey',
    icon: ['fab', 'linkedin'],
    href: 'https://www.linkedin.com/in/jacktoumey/'
  },
  {
    username: 'JackToumey',
    icon: ['fab', 'twitter'],
    href: 'https://twitter.com/JackToumey'
  },
];

const ContactList = () => {

  const contactCards = details.map(detail => <ContactCard key={detail.href} detail={detail} />);

  return (
    <ContactListWrapper>
      {contactCards}
    </ContactListWrapper>
  );
};

export default ContactList;
