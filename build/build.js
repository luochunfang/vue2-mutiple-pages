require('./check-versions')()

// process.env.NODE_ENV = 'production'
process.env.NODE_ENV = process.argv[2] || 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

// use this same file to building `staging` or 'production' code
var webpackConfig,
    spinner,
    assetsPath

if (process.env.NODE_ENV === 'production') {
  webpackConfig = require('./webpack.prod.conf')
  spinner = ora('building for production...')
  assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
}

if (process.env.NODE_ENV === 'staging') {
  webpackConfig = require('./webpack.stg.conf')
  spinner = ora('building for staging...')
  assetsPath = path.join(config.stg.assetsRoot, config.stg.assetsSubDirectory)
}

spinner.start()

rm(path.join(assetsPath), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
