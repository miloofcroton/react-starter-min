import React from 'react';
import { withRouter } from 'react-router-dom';
import { handleAuth } from '../../../data/resources/sessions/effects';
import { CORE_ROUTES } from '../../routes/core';

const Callback = withRouter(({ history }) => {
  handleAuth()
    .then(() => {
      return history.replace(CORE_ROUTES.HOME.linkTo());
    });

  return <h1>Loading</h1>;
});

export default Callback;
