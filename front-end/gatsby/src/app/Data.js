import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const DataWrapper = Component => {
  return class dataWrapper extends PureComponent {

    static propTypes = {
      children: PropTypes.any
    };

    render() {

      const { children } = this.props;

      return (
        <StaticQuery
          query={graphql`
            query HeadingQuery {
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
          `}
          render={data => <Component data={data}>{children}</Component>}
        />
      );
    }
  };
};

export default DataWrapper;
