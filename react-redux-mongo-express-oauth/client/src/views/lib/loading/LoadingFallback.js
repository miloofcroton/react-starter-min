import Loading from './Loading';

export const LoadingFallback = LoadingComponent => Component => {
  return function LoadingFallbackComponent(props) {
    if (props.loading) {
      return LoadingComponent(props);
    }

    return Component(props);
  };
};

export const loadingWithParagraph = LoadingFallback(Loading);
