const path = require("path");
const WEBPACK = require('webpack');
const path= require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

process.env.NODE_ENV='production';

module.exports = {
    mode:'production',
    target:'web',
    devtool:'source-map',
    entry:'./src/index',
    output:{
        path:path.resolve(__dirname,"build"),
        publicPath:'/',
        filename:'bundle.js',

    },
    devServer: {
        stats:'minimal',
        overlay:true,
        historyApiFallback:true,
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
    },
    // entry: path.resolve(__dirname, "./src/index.js"),
    plugins: [
        // new webpackBundleAnalyzer.BundleAnalyzerPlugin({analyzerMode:"static"}),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
          "process.env.API_URL": JSON.stringify(process.env.NODE_ENV),
          "process.env.API_URL": JSON.stringify("http://localhost:3001")
        }),
        new HtmlWebpackPlugin({
          template: "src/index.html",
          // favicon: "src/favicon.ico",
          minify:{
            removeComments:true,
            collapseWhitespace:true,
            removeRedundantAttributes:true,
            removeStyleLinkTypeAttributes:true,
            keepClosingSlash:true,
            minifyJS:true,
            minifyCSS:true,
            minifyURLs:true
          }
        })
      ],
      module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000' }
        ],
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
          },
          {
            test: /.(png|jpg|jpe?g|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=1024000' 
                   },   
          {
            test: /(\.css)$/,
            use: [MiniCssExtractPlugin.loader,{
              loader:"css-loader",
              options:{
                sourceMap:true
              }
            },
          {
            loader:"postcss-loader",
            options:{
              plugins:()=>[require('cssnano')],
              sourceMap:true 
            }
          }
          ]
          }
        ]
      }
    };
    