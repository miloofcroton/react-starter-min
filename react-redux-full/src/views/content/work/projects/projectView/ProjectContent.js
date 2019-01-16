import React from 'react';
import styled from 'styled-components';
import TechList from './TechList';

const ProjectContentWrapper = styled.div`

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

const ProjectContent = ({ project }) => {

  return (
    <ProjectContentWrapper>

      <h2>{project.title}</h2>
      <Desc>{project.description}</Desc>

      <h3>Links</h3>
      <ul>
        <li>
          <a
            href={project.github}
            target="_blank" rel="noopener noreferrer"
          >Github
          </a>
        </li>
        <li>
          <a
            href={project.live}
            target="_blank" rel="noopener noreferrer"
          >Live site
          </a>
        </li>
      </ul>

      <br/>

      <TechList techList={project.tags} />

    </ProjectContentWrapper>
  );

};

export default ProjectContent;
