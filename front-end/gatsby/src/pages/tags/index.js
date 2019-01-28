import React from 'react';
import { kebabCase } from 'lodash';
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

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <App>
    <section>
      <Helmet title={`Tags | ${title}`} />
      <TagDiv>
        <h1>Tags</h1>
        <StyledList>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </StyledList>
      </TagDiv>
    </section>
  </App>
);

export default TagsPage;
