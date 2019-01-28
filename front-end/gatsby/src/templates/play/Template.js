import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import Content from '../../styles/Content';
import { StyledList } from '../../styles/Lists';
import styled from 'styled-components';

import Img from 'gatsby-image';

const PostImg = styled(Img)`
  border-radius: '5px';
`;

const MainContent = styled.div`
  border-radius: '5px';
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TagDiv = styled.div`
  margin: 4rem auto;

  ul {
    width: auto;
    display: inline-block;
    li {
      display: inline;
    }
  }
`;

const PlaysPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  image,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ''}
      <h1>{title}</h1>
      <p>{description}</p>
      <MainContent>
        <PostImg fluid={image.childImageSharp.fluid} alt={title} />
        <PostContent content={content} />
      </MainContent>
      {tags && tags.length ? (
        <TagDiv>
          <h4>Tags</h4>
          <StyledList>
            {tags.map(tag => (
              <li key={tag + 'tag'}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </StyledList>
        </TagDiv>
      ) : null}
    </section>
  );
};

PlaysPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

export default PlaysPostTemplate;
