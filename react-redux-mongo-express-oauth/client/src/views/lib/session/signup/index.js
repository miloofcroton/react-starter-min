import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from './Form';

const SignUp = withRouter(({ history }) => {
  return (
    <SignUpForm history={history} />
  );
});

export default SignUp;
