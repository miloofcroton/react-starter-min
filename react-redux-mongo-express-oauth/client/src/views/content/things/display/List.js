import React from 'react';
import PropTypes from 'prop-types';
import ThingCard from './Card';

const ThingList = ({ list }) => {

  return (
    <div>
      <h2>List of things:</h2>
      {!!list && list.map((thing, index) => (
        <ThingCard key={index} thing={thing} />
      ))}
    </div>
  );
};

ThingList.propTypes = {
  list: PropTypes.array
};

export default ThingList;
