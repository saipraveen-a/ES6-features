// Imports: Dependencies
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
require("babel-register");

// Webpack Configuration
const config = {
  
  // Entry - PATH TO INDEX.JS/INDEX.JSX (if using React) FILE
  entry: {
    index: './src/index.js'
  }, 

  // Output - PATH TO SEND BUNDLED/TRANSPILED CODE
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      {
        test: /\.(css|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // HTML Files
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  // Plugins
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      hash: true
    })
  ],

  // OPTIONAL
  watch: true, // Reload On File Change
  devtool: 'source-map',   // Development Tools (Map Errors To Source File)
};


// Exports
module.exports = config;