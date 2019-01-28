
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const PreviewListWrapper = styled.ul`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(375px, 1fr));
`;

const PreviewGrid = ({ posts }) => {
  return (
    <PreviewListWrapper>
      {posts.map(({ node: post }) => (
        <Card key={post.id} post={post} />
      ))}
    </PreviewListWrapper>
  );
};

export default PreviewGrid;
