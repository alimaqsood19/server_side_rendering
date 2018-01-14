const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  //Clilent side bundling

  //tell webpack the root file of our client side file, the entry point of our application
  entry: './src/client/client.js',

  //Tell webpack where to put the output file (bundle.js) that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') //__dirname is a reference to the current directory we are working in, and put it in a folder called public
  }
};

module.exports = merge(baseConfig, config);
