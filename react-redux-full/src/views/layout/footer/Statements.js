import React, { Fragment } from 'react';
import styled from 'styled-components';

const GithubLink = styled.a`
  font-weight: bolder;
  display: inline-block;
  text-decoration: none;
  color: black;
`;

const Statements = () => {

  return (
    <Fragment>
      <p>Copyright &copy; 2018. All rights reserved.</p>
      <GithubLink href="https://github.com/miloofcroton/homepage">This website</GithubLink>
      {' by '}
      <GithubLink href="https://github.com/miloofcroton">me</GithubLink>.
    </Fragment>
  );
};

export default Statements;
