import React, { PureComponent } from 'react';
import styled from 'styled-components';

import ProjectPanel from './projectPanel';
import ProjectView from './projectView';

import projects from '../../../../data/static/projects';

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export default class Projects extends PureComponent {

  state = {
    selectedProject: null,
    projects: projects
  };

  handleSelect = (project) => {
    this.setState({ selectedProject: project });
  };

  render() {

    const { selectedProject } = this.state;

    return (
      <ProjectsWrapper>
        <ProjectPanel
          projects={projects}
          selected={selectedProject}
          onSelect={this.handleSelect}
        />
        <ProjectView
          project={selectedProject}
        />
      </ProjectsWrapper>
    );
  }

}
