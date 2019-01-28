import React from 'react';
import styled from 'styled-components';
import ProjectContent from './ProjectContent';

const ProjectDetailWrapper = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  h2 {
    margin: 40px;
  }
`;

const ProjectDetail = ({ project }) => {

  return (
    <ProjectDetailWrapper>
      {
        !!project ?
          <ProjectContent project={project} />
          :
          <h2>Select a project on the left!</h2>
      }
    </ProjectDetailWrapper>
  );

};

export default ProjectDetail;
