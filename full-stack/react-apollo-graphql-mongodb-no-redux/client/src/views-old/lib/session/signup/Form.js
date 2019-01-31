/*
goals:

- call signup function to OAuth
- redirect to home

*/

import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignUpForm = ({ handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <Field name="name" component="input" />
      </div>
      <div>
        <label htmlFor="photo">Photo: </label>
        <Field name="photo" component="input" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

const Indexed = reduxForm({ form: 'signup' });

export default Indexed(SignUpForm);



// import { signup } from '../../../../data/resources/sessions/effects';
// import { CORE_ROUTES } from '../../../routes/core';
// import { simpleHandleChange } from '../../functions/handleChange';


// export default class SignUpForm extends PureComponent {

//   state = {
//     email: '',
//     password: '',
//     name: '',
//     photo: ''
//   };

//   handleChange = simpleHandleChange(this);

//   handleSubmit = e => {
//     e.preventDefault();

//     const { email, password, name, photo } = this.state;

//     signup(email, password, name, photo);
//   };

//   render() {
//     const { email, password, name, photo } = this.state;
//     return (
// <form onSubmit={this.handleSubmit}>
//   <input type="email" name="email" value={email} />
//   <input type="password" name="password" value={password} />
//   <input name="name" value={name} />
//   <input name="photo" value={photo} />
//   <button>Sign up</button>
// </form>
//     );
//   }
// }
