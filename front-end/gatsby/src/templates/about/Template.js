import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../styles/Content';

import styled from 'styled-components';

import Greeting from '../../components/about/Greeting';

const AboutSection = styled.section`
  span {
    margin: 50px auto;
    font-size: 30px;
  }
  p {
    width: 60%;
    text-align: left;
    margin: 25px auto;
  }
`;

// eslint-disable-next-line no-unused-vars
const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <AboutSection>
      <Greeting />
      <PageContent content={content} />
    </AboutSection>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
