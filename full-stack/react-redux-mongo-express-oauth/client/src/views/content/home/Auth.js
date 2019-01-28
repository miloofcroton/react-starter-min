import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../../../data/resources/sessions/actions';
import { getSessionToken } from '../../../data/resources/sessions/selectors';

const Auth = ({ session, signout }) => {

  return (
    <div>
      {
        (!!session && session.user !== null)
          ? <button onClick={signout}>Sign Out</button>
          : <p>Sign up or sign in!</p>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  session: getSessionToken(state),
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(Auth);
