import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledA = styled.a`
  box-sizing: border-box;
  margin: 5px;
  padding: 8px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  background-color: ${ ({ theme }) => theme.darkgreen};
  border: 1px solid ${ ({ theme }) => theme.black};

  &:hover {
    background-color: ${ ({ theme }) => theme.lightgreen};
  }
`;

export const StyledLink = ({ href, params, children, className }) => (
  <Link href={href} params={params} passHref>
    <StyledA className={className}>{children}</StyledA>
  </Link>
);
