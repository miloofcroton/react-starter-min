import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './Card';

class ItemList extends PureComponent {

  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <h2>List of items:</h2>
        {!!data && data.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default ItemList;
