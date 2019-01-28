import React from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

const ProjectListWrapper = styled.ul`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: -webkit-fill-available;
  overflow: auto;
  line-height: 1;
`;

const ProjectList = ({ projects, selected, onSelect }) => {

  const projectCards = projects
    .sort((a, b) => {
      if (a.date < b.date) return 1;
      else if (a.date > b.date) return -1;
      else if (a.date === b.date) return 0;
    })
    .map(project => {
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
