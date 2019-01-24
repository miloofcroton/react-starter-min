import React from 'react';
import { withRouter } from 'react-router-dom';
import { signin } from '../../../../data/resources/sessions/effects';


import Button from './Button';

const SignIn = withRouter(() => {

  const handleClick = e => {
    e.preventDefault();
    signin();
  };

  return (
    <Button handleClick={handleClick} />
  );
});

export default SignIn;
