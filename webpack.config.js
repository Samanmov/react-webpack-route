var webpack = require('webpack');
var path = require('path');

//BUILD_DIR represents the directory path of the bundle file output.
var BUILD_DIR = path.resolve(__dirname, 'public');
//The APP_DIR holds the directory path of the React application's codebase and the
var APP_DIR = path.resolve(__dirname, 'src');


var config = {
     //entry which is where bundling needs to begin from
    entry: APP_DIR + '/index.jsx',
    //which is where the bundled result 
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    //which defines what loaders should be used during the bundling process.
    //in my case babel is the loader I need.
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            //{
            //    test: /\.scss$/,
            //    loaders: [ 'style', 'css', 'sass' ]
            //}
        ]

    }

   // {
    //    test: /\.css$/,
   //     loaders: [
   //         'style?sourceMap',
   //         'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
   //     ]
   // }
};

// webpack config exported config object
module.exports = config;