import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postOneStart } from '../../../../data/resources/items/actions';
import ItemForm from './Form';

const ItemCreate = ({ postItem }) => {

  return (
    <div>
      <ItemForm onSubmit={postItem}/>
    </div>
  );
};

ItemCreate.propTypes = {
  postItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  postItem: () => dispatch(postOneStart())
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(ItemCreate);
