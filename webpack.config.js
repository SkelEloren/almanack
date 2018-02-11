const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
	index: './index.js',
	style:'./style.scss',
    },

    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: '[name].bundle.js',
	publicPath: '/assets',
    },

    // resolveLoader: {
    // 	alias: {
    // 	    'paper-loader':"../node_modules/paper-loader/index"
    // 	}
    // },
    // module: {
    // 	loaders:[
    // 	    {
    // 		test: /\.paper.js$/,
    // 		loader:"paper-loader"
    // 	    }
    // 	]
    // },

    module: {
	rules: [
	    {
		test:/\.(sass|scss)$/i,
		use: [
		    'style-loader',
		    'css-loader',
		    'sass-loader',
		],
	    }],
    },

    devServer: {
	contentBase: path.resolve(__dirname, 'src'),
    },

};
    
