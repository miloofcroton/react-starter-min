import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../../../data/resources/sessions/actions';
import { getSessionToken } from '../../../data/resources/sessions/selectors';

import SignIn from '../../lib/session/signin';
import SignOut from '../../lib/session/signout';

const Auth = ({ session, signout }) => {

  return (
    <div>
      {
        (!!session && session.user !== null)
          ? <SignOut />
          : <SignIn />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  session: getSessionToken(state),
});

const mapDispatchToProps = dispatch => ({
  // signout: () => dispatch(signout()),
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(Auth);
