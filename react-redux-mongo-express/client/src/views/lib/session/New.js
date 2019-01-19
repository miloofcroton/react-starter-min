import { connect } from 'react-redux';
import { signup, signin } from '../../../data/store/resources/sessions/actions';
import { getSession } from '../../../data/store/resources/sessions/selectors';
import Form from './Form';

export const SignUp = connect(
  state => ({
    typeText: 'Sign Up',
    session: getSession(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(signup({ email, password }))
  })
)(Form);

export const SignIn = connect(
  state => ({
    typeText: 'Sign In',
    session: getSession(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(signin({ email, password }))
  })
)(Form);
