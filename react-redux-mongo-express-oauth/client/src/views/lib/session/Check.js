import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessionToken } from '../../../data/store/resources/sessions/selectors';

const CheckSession = Component => {
  const CheckSessionComponent = (props) => {
    if (!props.sessionToken) return <Redirect to='/signin' />;

    return <Component {...props} />;
  };

  const mapStateToProps = state => ({
    sessionToken: getSessionToken(state)
  });

  const Data = connect(mapStateToProps);

  return Data(CheckSessionComponent);
};

export default CheckSession;
