import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Panel from './panel';
import Detail from './detail';

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export default class Projects extends PureComponent {

  state = {
    selectedProject: null,
  };

  handleSelect = project => {
    this.setState({ selectedProject: project });
  };

  checkProject = () => {
    const { pathname, projects } = this.props;
    // eslint-disable-next-line no-unused-vars
    const selectedProject = projects.find(project => project.link === pathname);
    // this.setState({ selectedProject });
  };

  componentDidMount() {
    this.checkProject();
  }

  render() {

    const { selectedProject } = this.state;
    const { projects } = this.props;

    return (
      <ProjectsWrapper>
        <Panel
          projects={projects}
          selected={selectedProject}
          onSelect={this.handleSelect}
        />
        <Detail
          project={selectedProject}
        />
      </ProjectsWrapper>
    );
  }

}
