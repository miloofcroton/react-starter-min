import React from 'react';
import PropTypes from 'prop-types';

import FeatureGrid from '../../components/products/FeatureGrid';
import Testimonials from '../../components/products/Testimonials';
import Pricing from '../../components/products/Pricing';
import PreviewCompatibleImage from '../../components/products/PreviewCompatibleImage';


import styled from 'styled-components';

const FullWidthImage = styled.div`
  ${ props => props.marginTop && 'margin-top: 0'}
  width: 100vw;
  height: 400px;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 5em -50vw;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ ({ image }) => !!image.childImageSharp ? image.childImageSharp.fluid.src : image});
`;

const ImgHeader = styled.h2`
  box-shadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40';
  background-color: '#f40';
  color: 'white';
  padding: '1rem';
`;

const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <section>
    <FullWidthImage image={image}>
      <ImgHeader>{title}</ImgHeader>
    </FullWidthImage>

    <h3>{heading}</h3>
    <p>{description}</p>

    <FeatureGrid gridItems={intro.blurbs} />
    <h3>{main.heading}</h3>
    <p>{main.description}</p>

    <article>
      <PreviewCompatibleImage imageInfo={main.image1} />
    </article>
    <article>
      <PreviewCompatibleImage imageInfo={main.image2} />
    </article>
    <article>
      <PreviewCompatibleImage imageInfo={main.image3} />
    </article>

    <Testimonials testimonials={testimonials} />
    <FullWidthImage image={fullImage} />
    <h2>{pricing.heading}</h2>
    <p>{pricing.description}</p>
    <Pricing data={pricing.plans} />
  </section>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

export default ProductPageTemplate;
