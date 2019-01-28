import React from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const ProjectListWrapper = styled.ul`
  margin: 0px;
  padding: 0px;
  width: 100%;
  overflow: auto;
`;

const ProjectList = ({ projects, selected, onSelect }) => {

  const projectCards = projects.map(project => {
    return (
      <ProjectCard
        key={project.title}
        project={project}
        onSelect={onSelect}
        selected={(!!selected && selected.title == project.title) ? true : false}
      />
    );
  });

  return (
    <ProjectListWrapper>
      {projectCards}
    </ProjectListWrapper>
  );

};

export default ProjectList;
