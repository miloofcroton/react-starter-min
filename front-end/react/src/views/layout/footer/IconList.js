import React from 'react';
import styled from 'styled-components';

import IconCard from './IconCard';

const IconListWrapper = styled.ul`
  padding: 0px;
`;

const details = [
  {
    name: 'Business Card',
    icon: 'address-book',
    href: '/src/assets/contact/contact.vcf'
  },
  {
    name: 'Email',
    icon: 'envelope',
    href: 'mailto:jack@toumey.io'
  },
  {
    name: 'Github Profile',
    icon: ['fab', 'github'],
    href: 'https://github.com/miloofcroton'
  },
  {
    name: 'Public Key',
    icon: 'key',
    href: '/src/assets/contact/public.key'
  },
];

const IconList = () => {

  const icons = details.map(detail => <IconCard key={detail.name} detail={detail} />);

  return (
    <IconListWrapper>
      {icons}
    </IconListWrapper>
  );
};

export default IconList;
