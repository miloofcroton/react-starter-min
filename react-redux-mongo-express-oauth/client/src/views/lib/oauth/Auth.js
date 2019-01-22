import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { handleAuth, signup } from '../../../data/services/oauth/functions';
import { CORE_ROUTES } from '../../routes/core';

class Signup extends PureComponent {
  state = {
    email: '',
    password: '',
    name: '',
    photo: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password, name, photo } = this.state;
    signup(email, password, name, photo)
      .then(() => this.props.history.push(CORE_ROUTES.HOME.linkTo()));
  };

  render() {
    const { email, password, name, photo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="email" value={email} onChange={this.handleChange} />
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <input name="name" value={name} onChange={this.handleChange} />
        <input name="photo" value={photo} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export const SignupWithRouter = withRouter(Signup);

export const Callback = withRouter(({ history }) => {
  handleAuth()
    .then(() => {
      return history.replace(CORE_ROUTES.HOME.linkTo());
    });

  return <h1>Loading</h1>;
});
