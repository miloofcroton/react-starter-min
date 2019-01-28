import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import Content from '../../styles/Content';
import { StyledList } from '../../styles/Lists';
import styled from 'styled-components';

const TagDiv = styled.div`
  margin-top: 4rem;

  ul {
    width: auto;
    display: inline-block;
    li {
      display: inline;
    }
  }
`;

const WorkPostWrapper = styled.section`
  ul {
    margin: 0 auto;
    list-style: none;
    padding-inline-start: 0;

    li {
      a {
        text-decoration: none;
        color: ${ ({ theme }) => theme.darkgreen};
      }
    }
  }

  h3 {
    margin: 10px auto;
  }
`;

const Desc = styled.p`
  margin: 10px 100px;
  text-align: left;
`;

const WorkPostTemplate = ({
  content,
  contentComponent,
  title,
  date,
  description,
  tags,
  live,
  github,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <WorkPostWrapper>
      {helmet || ''}

      <h2>{title}</h2>
      <small>{date}</small>
      <Desc>{description}</Desc>

      <br />

      <PostContent content={content} />

      {github && live ? (
        <Fragment>
          <h3>Links</h3>
          <ul>
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href={live} target="_blank" rel="noopener noreferrer">
                Live site
              </a>
            </li>
          </ul>
        </Fragment>
      ) : null}

      <br />

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

    </WorkPostWrapper>
  );
};

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

export default WorkPostTemplate;
