import React from 'react';
import PageHelmet from '../../styles/PageHelmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import App from '../../app';
import PreviewList from '../../components/thoughts/preview/List';

const ThoughtsIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <App>
      <PageHelmet title='Thoughts' />
      <h1>Latest Thoughts</h1>
      <PreviewList posts={posts}/>
    </App>
  );
};

ThoughtsIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ThoughtsIndex;

export const pageQuery = graphql`
  query ThoughtsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "thoughts" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
