const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals'); //ensures libraries arent transpiled and added to bundle.js

const config = {
  //Inform webpack that we are building a bundle for Nodejs, rather than for the browser
  //Be default webpack assumes you are creating a bundle for the browser so it makes some default assumptions
  //By specifying that it is running for node it will do things differently
  target: 'node',

  //tell webpack the root file of our server application, the entry point of our application
  entry: './src/index.js',

  //Tell webpack where to put the output file (bundle.js) that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') //__dirname is a reference to the current directory we are working in, and put it in a folder called build
  },
  externals: [webpackNodeExternals()] //tells webpack not to bundle any libraries into our output bundle on the server, if the library exists in the node_modules folder
  //So any library in the node_modules folder will not be included with the server side bundle
};

module.exports = merge(baseConfig, config);
