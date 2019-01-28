import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import App from '../../app';
import { HTMLContent } from '../../styles/Content';
import WorkPostTemplate from './Template';

const WorkPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <App>

      <WorkPostTemplate

        helmet={
          <Helmet titleTemplate="Work | %s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }

        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        live={post.frontmatter.live}
        github={post.frontmatter.github}
      />

    </App>
  );
};

WorkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default WorkPost;

export const workPageQuery = graphql`
  query WorkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        github
        live
      }
    }
  }
`;
