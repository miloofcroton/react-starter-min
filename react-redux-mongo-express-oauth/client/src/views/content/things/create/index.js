import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { simpleHandleChange } from '../../../lib/functions/handleChange';

export class ThingCreate extends PureComponent {

  static propTypes = {
    postThing: PropTypes.func.isRequired
  };

  state = {
    title: '',
    description: ''
  };

  onChange = simpleHandleChange(this);

  createThing = e => {
    e.preventDefault();
    const { postThing } = this.props;
    const { title, description } = this.state;
    postThing({ title, description });
  };

  render() {

    const { title, description } = this.state;

    return (
      <div>
        <form onSubmit={this.createThing}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.onChange}
            />
          </div>
          <div>
            <button type="submit">Create new thing</button>
          </div>
        </form>
      </div>
    );
  }
}

import { postThing } from '../../../../data/store/resources/things/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  postThing: thing => dispatch(postThing(thing))
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(ThingCreate);
