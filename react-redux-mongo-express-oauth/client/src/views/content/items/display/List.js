import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './Card';

const ItemList = ({ list, first, loading }) => {

  return (
    <div>
      <h2>First item (demo of reselect)</h2>
      {!!first && <ItemCard item={first} /> }
      <h2>List of all items:</h2>
      {!!list[0] && list.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
}

ItemList.propTypes = {
  list: PropTypes.array,
  first: PropTypes.object,
  loading: PropTypes.bool,
};

export default ItemList;
