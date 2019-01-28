import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import App from '../../app';

import { StyledList } from '../../styles/Lists';
import styled from 'styled-components';

const TagDiv = styled.div`
  margin-bottom: 6rem;
  ul {
    width: auto;
    display: inline-block;
    li {
      display: inline;
    }
  }
`;

class TagRoute extends PureComponent {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;

    return (
      <App>
        <Helmet title={`${tag} | ${title}`} />
        <section>
          <TagDiv>
            <h3>{tagHeader}</h3>
            <StyledList>{postLinks}</StyledList>
            <Link to="/tags/">Browse all tags</Link>
          </TagDiv>
        </section>
      </App>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
