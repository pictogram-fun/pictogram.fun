const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        // below line only works for webpack 1.0
        // path: './dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.png$/, loader: "file-loader?name=dist/[path][name].[ext]"},
            {test: /\.sass/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
