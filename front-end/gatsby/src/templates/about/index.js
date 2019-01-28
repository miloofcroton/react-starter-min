import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import App from '../../app';
import { HTMLContent } from '../../styles/Content';

import AboutPageTemplate from './Template';

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <App>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </App>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
