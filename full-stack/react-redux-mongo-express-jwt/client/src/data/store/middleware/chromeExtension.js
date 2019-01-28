const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const chromeExtension = enhancers => {
  if (
    process.env.NODE_ENV === 'development' &&
    typeof reduxDevToolsExtension === 'function'
  ) {
    enhancers.push(reduxDevToolsExtension());
  }
};

export default chromeExtension;
