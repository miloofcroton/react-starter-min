import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postOneStart } from '../../../../data/resources/things/actions';
import ThingForm from './Form';

const ThingCreate = ({ postThing }) => {

  return (
    <div>
      <ThingForm onSubmit={postThing} />
    </div>
  );
};

ThingCreate.propTypes = {
  postThing: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  postThing: () => dispatch(postOneStart())
});

const Data = connect(null, mapDispatchToProps);

export default Data(ThingCreate);
