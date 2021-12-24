const path = require('path')
const fs = require('fs')
const nodeExternals = require('webpack-node-externals')

const components = fs.readdirSync(path.resolve(__dirname, '../src/components/modules'))

let externals = {}

components.forEach(name => {
  externals[`components/modules/${name}`] = `/dist/lib/${name}`
})

externals = Object.assign({ vue: 'vue' }, externals, nodeExternals())

exports.components = components.reduce((last, curr) => {
  last[`lib/${curr}`] = path.resolve(__dirname, `../src/components/modules/${curr}`)
  return last
}, {})

exports.externals = externals

exports.alias = {
  'vue$': 'vue/dist/vue.esm.js',
  '@view': path.resolve(__dirname, '../src/view/combination'),
  '@style': path.resolve(__dirname, '../src/assets/style'),
  '@theme': path.resolve(__dirname, '../theme'),
  '@styl': path.resolve(__dirname, '../src/assets/style/variables.styl'),
  '@elParams': path.resolve(__dirname, '../template/element-variables.scss'),
  '@directives': path.resolve(__dirname, '../src/directives'),
  '@modules': path.resolve(__dirname, '../src/components/modules'),
  '@state': path.resolve(__dirname, '../src/components/js/state.js'),
  '@components': path.resolve(__dirname, '../src/components'),
  '@img': path.resolve(__dirname, '../src/assets/img')
}
