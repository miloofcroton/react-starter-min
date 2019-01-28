import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import App from '../../app';
import { HTMLContent } from '../../styles/Content';
import PlayPostTemplate from './Template';

const PlayPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <App>
      <PlayPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="Play | %s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
      />
    </App>
  );
};

PlayPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PlayPost;

export const playPageQuery = graphql`
  query PlayPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          id
          childImageSharp {
            fluid (quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`;
