const path = require('path')
const MiniCssExtractPLugin = require('mini-css-extract-plugin')
const HtmlWebpackPlgin = require('html-webpack-plugin')
const webpack = require('webpack')
const { Template } = require('webpack')

module.exports = {
    entry: {
        home : path.resolve(__dirname,'src/js/index.js'),       
        contact : path.resolve(__dirname,'src/js/contact.js'),       
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: 'dist/', 
        chunkFilename: 'js/[id].[chunkhash].js'
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
                    {
                        loader : MiniCssExtractPLugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader : MiniCssExtractPLugin.loader,
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader : MiniCssExtractPLugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader : MiniCssExtractPLugin.loader,
                    },
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options :{
                        limit:90000,
                    }
    
                }
                 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPLugin({
            filename : 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlgin ({
            title: 'webpack-dev-server',
            template: path.resolve(__dirname,'index.html')
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ],
}