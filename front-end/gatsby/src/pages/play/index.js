import React from 'react';
import PageHelmet from '../../styles/PageHelmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import App from '../../app';
import PreviewGrid from '../../components/play/preview/Grid';

const PlayIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <App>
      <PageHelmet title='Work' />
      <h1>Latest Goings-on</h1>
      <PreviewGrid posts={posts} />
    </App>
  );
};

PlayIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default PlayIndex;

export const pageQuery = graphql`
  query PlayIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "play" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image {
              id
              childImageSharp {
                fixed(width: 300, height: 300){
                  ...GatsbyImageSharpFixed
                }
              }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
