const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/main',
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude : /node_modules/,
            loader: 'babel'
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
        }, {
            test: /\.pug$/,
            loader: 'pug'
        }, {
            test: /\.(jpe?g|png|gif|svg|woff|ttf|eot)$/i,
            loader: 'file?name=[name].[ext]!image-webpack'
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.styl', '.pug']
    },
    resolveLoader: {
        moduleDirectories : ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug'
      }),
        new ExtractTextPlugin("styles.css")
    ]
  };