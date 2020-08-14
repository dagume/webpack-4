const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlgin = require('html-webpack-plugin')
const webpack = require('webpack')
const { Template } = require('webpack')

module.exports = {
    entry: {
        home : path.resolve(__dirname,'src/js/index.js'),       
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    }, 
    devServer: {
        hot: true,
        open: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlgin ({
            title: 'webpack-dev-server',
            template: path.resolve(__dirname,'index.html')
        }),
    ]
}