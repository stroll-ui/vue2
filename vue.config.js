const path = require('path')
const config = require('./build/config')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: config.alias
    },
    optimization: {
      sideEffects: false
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        import: resolve('./src/assets/style/variables.styl')
      }
    }
  }
}
