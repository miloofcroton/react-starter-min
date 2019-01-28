/* eslint-env node */
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins:
          [
            require('autoprefixer')(),
            require('postcss-nested')(),
            require('postcss-simple-vars')()
          ],
      } 
    }
  }
};
