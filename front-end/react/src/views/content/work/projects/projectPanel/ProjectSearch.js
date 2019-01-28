import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectSearchWrapper = styled.form`

  label {
    display: block;
  }

  select {
    background-color: ${ ({ theme }) => theme.white};
  }

`;

export default class ProjectSearch extends PureComponent {

  static propTypes = {
    onSort: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
  };

  state = {
    sort: 'dateNewOld',
    query: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSortChange = async(e) => {
    await this.onChange(e);
    this.props.onSort(this.state.sort);
  };

  handleFilterChange = async(e) => {
    await this.onChange(e);
    const filter = {
      query: this.state.query,
    };
    this.props.onFilter(filter);
  };

  render() {

    const { query, sort } = this.state;
    const { sortOptions } = this.props;

    const optionList = Object.keys(sortOptions).map(key => {
      return <option key={key} value={key}>{sortOptions[key].title}</option>;
    });

    return (
      <ProjectSearchWrapper>

        <label htmlFor="query">search all projects</label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={this.handleFilterChange}
        />
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          value={sort}
          onChange={this.handleSortChange}
        >
          {optionList}
        </select>
      </ProjectSearchWrapper>
    );
  }
}
