import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../../data/resources/sessions/actions';
import Button from './Button';

const SignIn = ({ signIn }) => {

  return (
    <Button handleClick={signIn} />
  );
};

const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(signIn()),
});

const Data = connect(null, mapDispatchToProps);

export default Data(SignIn);
