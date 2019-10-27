module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "~bootstrap/scss/bootstrap";`
      }
    }
  }
}