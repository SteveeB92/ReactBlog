var webpack = require('webpack');

module.exports = {
    
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loader: 'style-loader'
        }, 
        {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
            }
        }]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    }/*,
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                template: __dirname + '/app/index.html',
                filename: 'index.html',
                inject: 'body'
            }   
        })
    ]*/
};