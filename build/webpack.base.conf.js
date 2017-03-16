var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var assetsPublicPath = config.dev.assetsPublicPath,
    minify = {},
    entries = utils.getEntry('./src/views/**/*.js'),
    pages = utils.getEntry('./src/views/**/*.html', 'html')

if (process.env.NODE_ENV === 'production') {
  assetsPublicPath = config.build.assetsPublicPath
  minify = {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    // more options:
    // https://github.com/kangax/html-minifier#options-quick-reference
  }
}

if (process.env.NODE_ENV === 'staging') {
  assetsPublicPath = config.stg.assetsPublicPath
}

module.exports = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: []
}

// generate dist index.html with correct asset hash for caching.
// you can customize output by editing /index.html
// see https://github.com/ampedandwired/html-webpack-plugin
for (let pathname in pages) {
  let filename = pathname.split('/')[1]
  let config = {
    // refer to `../config/index.js` line 11 -- output dir #1
    filename: pathname + '.html',

    // refer to `../config/index.js` line 23 -- output dir #2
    // let filename = pathname.split('/')[1]
    // filename: pathname + '/' + filename + '.html',
    template: pages[pathname],

    inject: true,
    chunks: [filename, 'vendor', 'manifest'],
    minify: minify,

    // https://webpack.js.org/guides/caching/ [en]
    // https://doc.webpack-china.org/guides/caching/ [cn]
    hash: false,

    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }

  module.exports.plugins.push(new HtmlWebpackPlugin(config))
}
