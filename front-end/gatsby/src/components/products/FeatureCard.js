import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import styled from 'styled-components';

const PreviewCard = styled.div`
  width: 240px;
  display: inline-block;
`;

const FeatureCard = ({ item }) => (
  <section>
    <PreviewCard>
      <PreviewCompatibleImage imageInfo={item} />
    </PreviewCard>
    <p>{item.text}</p>
  </section>
);

FeatureCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    text: PropTypes.string,
  })
};

export default FeatureCard;
