import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PreviewCardWrapper = styled.div`
  border: 1px solid #333;
  padding: 2em 4em;
  margin: 1em;
`;

const PreviewCard = ({ post }) => {
  return (
    <PreviewCardWrapper>
      <p>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        <span> &bull; </span>
        <small>{post.frontmatter.date}</small>
      </p>

      <p>
        {post.excerpt}
        <br /> <br />
        <Link to={post.fields.slug}>Keep Reading →</Link>
      </p>
    </PreviewCardWrapper>
  );
};

export default PreviewCard;
