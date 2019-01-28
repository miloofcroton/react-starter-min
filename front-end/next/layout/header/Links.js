import React from 'react';
import { StyledLink } from '../../styles/Links';

const ROUTES = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/about',
    label: 'About'
  }
];

export const NavLinks = () => {
  return ROUTES
    .map((route, i) => (
      <StyledLink
        key={i}
        href={route.href}
      >
        <a>
          {route.label}
        </a>
      </StyledLink>
    ));

};
