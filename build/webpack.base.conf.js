var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var project = process.argv[3]

var minify = {}
var entry = {}
var projectPages = {}
var tempPages
var tempEntry

var entries               = utils.getEntry('./src/views/**/*.js')
var pages                 = utils.getEntry('./src/views/**/*.html', 'html')

var cssPath               = utils.assetsPath('css/[name].[contenthash].css')
var filename              = utils.assetsPath('js/[name].[chunkhash].js')
var chunkFilename         = utils.assetsPath('js/[id].[chunkhash].js')
var imgPath               = utils.assetsPath('img/[name].[hash:7].[ext]')
var fontsPath             = utils.assetsPath('fonts/[name].[hash:7].[ext]')

var assetsSubDirectory    = config.dev.assetsSubDirectory
var staticSourceDirectory = config.dev.assetsSubDirectory
var assetsPublicPath      = config.dev.assetsPublicPath
var staticSourceDest      = config.dev.assetsSubDirectory
var assetsRoot            = config.dev.assetsRoot

if (process.env.NODE_ENV === 'production') {
  assetsRoot              = config.build.assetsRoot
  staticSourceDest        = config.build.assetsSubDirectory
  assetsSubDirectory      = config.build.assetsSubDirectory
  staticSourceDirectory   = config.build.staticSourceDirectory
  assetsPublicPath        = config.build.assetsPublicPath
  minify = {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    // more options:
    // https://github.com/kangax/html-minifier#options-quick-reference
  }
}

if (process.env.NODE_ENV === 'staging') {
  assetsRoot              = config.stg.assetsRoot
  staticSourceDest        = config.stg.assetsSubDirectory
  assetsSubDirectory      = config.stg.assetsSubDirectory
  staticSourceDirectory   = config.stg.staticSourceDirectory
  assetsPublicPath        = config.stg.assetsPublicPath
}

if (project) {
  staticSourceDest = staticSourceDirectory
  cssPath          = utils.assetsPath(project + '/css/[name].[contenthash].css')
  filename         = utils.assetsPath(project + '/js/[name].[chunkhash].js')
  chunkFilename    = utils.assetsPath(project + '/js/[id].[chunkhash].js')
  imgPath          = utils.assetsPath(project + '/img/[name].[hash:7].[ext]')
  fontsPath        = utils.assetsPath(project + '/fonts/[name].[hash:7].[ext]')

  // filter project pages
  // handle one project with mutiple pages
  for (let key in pages) {
    let arr = key.split('/')

    if (arr[1] === project) {
      projectPages[key] = pages[key]
    }
  }

  // filter project js
  // handle one project with mutiple js
  for (let key in entries) {
    let arr = key.split('/')

    // entry[arr[1] + '/' + arr[2]] = entries[key]

    if (arr[1] === project) {
      entry[arr[2]] = entries[key]
    }

    // ff[arr[1]]
  }

  tempPages = projectPages
  tempEntry = entry
}

if (process.env.NODE_ENV === 'development') {
  filename = '[name].js'
  tempPages = pages
  tempEntry = entries
}

module.exports = {
  entry: tempEntry,
  output: {
    path: assetsRoot,
    filename: filename,
    // filename: '[name].[chunkhash].js',
    publicPath: assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src': path.resolve(__dirname, '../src'),
      'utils': path.resolve(__dirname, '../src/utils'),
      'services': path.resolve(__dirname, '../src/services'),
      'router': path.resolve(__dirname, '../src/router'),
      'store': path.resolve(__dirname, '../src/store'),
      'api': path.resolve(__dirname, '../src/api'),
      'filter': path.resolve(__dirname, '../src/filter'),
      'components': path.resolve(__dirname, '../src/components')
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
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
          name: imgPath
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          name: fontsPath
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    // new WebpackEntriesPlugin()
  ]
}

// generate dist index.html with correct asset hash for caching.
// you can customize output by editing /index.html
// see https://github.com/ampedandwired/html-webpack-plugin
for (let pathname in tempPages) {
  let filename = pathname.split('/')[2]  // inject correct css/js

  let config = {
    // refer to `../config/index.js` line 11 -- output dir #1
    filename: pathname + '.html',

    // refer to `../config/index.js` line 23 -- output dir #2
    // let filename = pathname.split('/')[1]
    // filename: pathname + '/' + filename + '.html',

    template: tempPages[pathname],

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
