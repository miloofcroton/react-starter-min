import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const PreviewGridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));

`;

const PreviewGrid = ({ posts }) => {
  return (
    <PreviewGridWrapper>
      {posts.map(({ node: post }) => (
        <Card key={post.id} post={post} />
      ))}
    </PreviewGridWrapper>
  );
};

export default PreviewGrid;
