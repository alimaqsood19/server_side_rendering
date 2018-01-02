const path = require('path');

module.exports = {
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

  //Tell babel to run on every file it runs through, take JSX and es2015,2016 and 2017 code into ES5
  module: {
    rules: [
      {
        test: /\.js?$/, //tells babel to only apply to JS files only
        loader: 'babel-loader', //The actual webpack loader module that transpiles our code
        exclude: /node_modules/, //Tells webpack not to run babel on certain files/directory
        options: {
          presets: [
            //Actual rules used by babel to transpile our code
            'react', //Turn JSX into JS functions
            'stage-0', //Used for handling async code
            ['env', { targets: { browsers: ['last 2 versions'] } }] //env is a master preset that runs all the transform rules needed
            //to meet the requirements of the last two version of popular browsers, takes care a lot of transpile stuff (catch all rule)
          ]
        }
      }
    ]
  }
};
