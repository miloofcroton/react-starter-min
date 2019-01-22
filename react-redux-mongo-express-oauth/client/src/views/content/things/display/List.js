import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ThingCard from './Card';

export default class ThingList extends PureComponent {

  static propTypes = {
    // list: PropTypes.array
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <h2>List of things:</h2>
        {!!list && list.map((thing, index) => (
          <ThingCard key={index} thing={thing} />
        ))}
      </div>
    );
  }
}
