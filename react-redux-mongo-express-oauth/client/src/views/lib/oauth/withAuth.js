import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthToken } from '../../../data/store/resources/oauth/selectors';

export const withAuth = Component => {
  const WithAuthComponent = (props) => {
    if (!props.authToken) return <Redirect to='/login' />;

    return <Component {...props} />;
  };

  return connect(
    state => ({
      authToken: getAuthToken(state)
    })
  )(WithAuthComponent);
};
