import React from 'react';
import styled from 'styled-components';

const ProjectCardWrapper = styled.li`
  list-style: none;
  border-bottom: 1px solid black;

  background-color: ${ ({ theme, selected }) => {
    return selected ? theme.darkgreen : theme.white;
  }};

  span {
    font-weight: bolder;
  }

  &:hover {
    background-color: ${ ({ theme }) => theme.lightgreen};
    cursor: pointer;
  }
`;

const ProjectCard = ({ project, selected, onSelect }) => {

  const handleClick = () => {
    onSelect(project);
  };

  return (
    <ProjectCardWrapper
      selected={selected}
      onClick={handleClick}
    >
      <span>{project.title}</span>
      <p>{project.summary}</p>
    </ProjectCardWrapper>
  );

};

export default ProjectCard;
