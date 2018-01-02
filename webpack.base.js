module.exports = {
  //bable configuration
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
