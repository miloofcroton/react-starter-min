import React, { PureComponent } from 'react';

// note: this will cause race conditions if child component affects the loading state on mount
export const Fallback = LoadingComponent => Component => {
  return function LoadingFallbackComponent(props) {
    if (props.loading) return (
      <LoadingComponent {...props} />
    );

    return <Component {...props} />;
  };
};

// useful if you don't want to use a higher order fetching component
export const FallbackWithFetch = LoadingComponent => Component => {
  return class LoadingFallbackComponent extends PureComponent {
    componentDidMount() {
      this.props.fetch();
    }

    render() {
      return (
        this.props.loading
          ? <LoadingComponent {...this.props} />
          : <Component {...this.props } />
      );
    }
  };
};
