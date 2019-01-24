import React, { PureComponent } from 'react';
import { signup } from '../../../../data/resources/sessions/effects';
import { CORE_ROUTES } from '../../../routes/core';
import { simpleHandleChange } from '../../functions/handleChange';

export default class SignUpForm extends PureComponent {

  state = {
    email: '',
    password: '',
    name: '',
    photo: ''
  };

  onChange = simpleHandleChange(this);

  handleSubmit = e => {
    e.preventDefault();

    const { email, password, name, photo } = this.state;
    signup(email, password, name, photo)
      .then(() => this.props.history.push(CORE_ROUTES.HOME.linkTo()));
  };

  render() {
    const { email, password, name, photo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" value={email} onChange={this.handleChange} />
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <input name="name" value={name} onChange={this.handleChange} />
        <input name="photo" value={photo} onChange={this.handleChange} />
        <button>Sign up</button>
      </form>
    );
  }
}
