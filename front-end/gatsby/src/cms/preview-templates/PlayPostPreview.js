import React from 'react';
import PropTypes from 'prop-types';
import PlayPostTemplate from '../../templates/play/Template';

const PlayPostPreview = ({ entry, widgetFor }) => (
  <PlayPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

PlayPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PlayPostPreview;
