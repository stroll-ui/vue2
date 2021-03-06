const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner

const config = require('./config')

process.stdout.write(chalk.cyan('Let\'s go! \n'))
const spinner = new Spinner(chalk.green('%s Building Admin UI..'))
spinner.setSpinnerString('⣾⣽⣻⢿⡿⣟⣯⣷')
spinner.start()

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: 'production',
  entry: {
    index: resolve('../src/components/main.js')
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].js',
    library: 'AdminUi',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  stats: {
    assets: true,
    assetsSort: '!size',
    builtAt: true,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    colors: true,
    depth: false,
    entrypoints: false,
    env: false,
    errors: true,
    errorDetails: true,
    hash: false,
    modules: false,
    moduleTrace: false,
    modulesSort: '!size',
    maxModules: 10,
    performance: true,
    providedExports: false,
    publicPath: true,
    reasons: false,
    source: false,
    timings: false,
    usedExports: false,
    version: true,
    warnings: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                path.resolve(__dirname, './../src/assets/style/variables.styl')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
          // publicPath: '/'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  externals: Object.assign({}, nodeExternals(), {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }),
  optimization: {
    minimize: false,
    sideEffects: false
  },
  plugins: [
    new webpack.ProgressPlugin((percentage, msg, ...args) => {
      spinner.setSpinnerTitle(chalk.green('%s ' + parseInt(percentage * 100) + '%' + ' Building Admin UI..'))
      if (percentage === 1) {
        spinner.stop()
        process.stdout.write('\n')
      }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
