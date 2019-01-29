import React from 'react';

export const Fallback = LoadingComponent => Component => {
  return function LoadingFallbackComponent(props) {
    if (props.loading) return (
      <LoadingComponent {...props} />
    );

    return <Component {...props} />;
  };
};
