const webpack = require('webpack');
const { srcRoot, dir, METADATA } = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

function getEntries(pattern) {
  const entries = {};

  glob.sync(pattern).forEach((file) => {
    console.log(file);
    entries[file.replace('build/', '')] = path.join(__dirname, file);
  });

  console.log(entries);
  return entries;
}

module.exports = function() {
  return {
    context: srcRoot,
    resolve: {
      extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
      modules: [
        'node_modules',
        dir('build'),
      ]
    },
    performance: {
      hints: false
    },
    entry: getEntries('build/**/*.ts'),
    output: {
      filename: '[name].js'
    },
    module: {
      exprContextCritical: false,
      rules: [

      ]
    },
    plugins: []
  };

};
