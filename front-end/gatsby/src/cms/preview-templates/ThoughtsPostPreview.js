import React from 'react';
import PropTypes from 'prop-types';
import ThoughtsPostTemplate from '../../templates/thoughts/Template';

const ThoughtsPostPreview = ({ entry, widgetFor }) => (
  <ThoughtsPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

ThoughtsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ThoughtsPostPreview;
