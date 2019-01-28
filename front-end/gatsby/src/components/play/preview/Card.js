import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PreviewCardWrapper = styled.div`
  border: 1px solid #333;
  padding: 1em;
  margin: 1em;

  a {
    text-decoration: none;
    color: inherit;

    h3 {
      text-decoration: underline;
    }
    small {
      display: block;
    }
  }
`;

const PreviewCard = ({ post }) => {
  return (
    <PreviewCardWrapper>
      <Link to={post.fields.slug}>
        <h3>{post.frontmatter.title}</h3>
        <small>{post.frontmatter.date}</small>
        <img src={post.frontmatter.image.childImageSharp.fixed.src} />
      </Link>

      <p>{post.excerpt}</p>
    </PreviewCardWrapper>
  );
};

export default PreviewCard;
