import React from 'react';
import { connect } from 'react-redux';

const ItemList = ({ list }) => {

  return (
    <p>
      hello world
    </p>
  );
};

import { fetchItems } from '../../../data/store/resources/items/actions';
import { getItems } from '../../../data/store/resources/items/selectors';

const mapStateToProps = state => ({
  list: getItems(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
