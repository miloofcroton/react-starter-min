import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../../data/resources/sessions/actions';
import Button from './Button';

const SignOut = ({ signOut }) => {

  return (
    <Button handleClick={signOut} />
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

const Data = connect(null, mapDispatchToProps);

export default Data(SignOut);
