import React from 'react';
import PropTypes from 'prop-types';
import FeatureCard from './FeatureCard';

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <FeatureCard key={item.text} item={item}/>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
