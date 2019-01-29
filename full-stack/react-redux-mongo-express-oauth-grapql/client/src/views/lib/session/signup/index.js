import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../../../data/resources/sessions/actions';
import SignUpForm from './Form';

const SignUp = ({ signUp }) => {

  return (
    <div>
      <SignUpForm onSubmit={signUp} />
    </div>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  signUp: () => dispatch(signUp())
});

const Data = connect(null, mapDispatchToProps);

export default Data(SignUp);


// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import SignUpForm from './Form';

// const SignUp = withRouter(({ history }) => {
//   return (
//     <SignUpForm history={history} />
//   );
// });

// export default SignUp;
