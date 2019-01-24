import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postThingStart } from '../../../../data/store/resources/things/actions';
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

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  postThing: () => dispatch(postThingStart())
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(ThingCreate);
