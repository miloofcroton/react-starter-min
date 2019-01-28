import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../../data/store/resources/sessions/actions';
import { getSession } from '../../../data/store/resources/sessions/selectors';

class Auth extends PureComponent {

  render() {

    const { session, signout } = this.props;

    return (
      <div>
        {
          (!!session && session.user !== null)
            ? <button onClick={signout}>Sign Out</button>
            : <p>Sign up or sign in!</p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  session: getSession(state),
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
