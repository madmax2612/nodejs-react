const path = require("path");
const WEBPACK = require('webpack');

const HtmlWebpackPlugin=require('html-webpack-plugin');
process.env.NODE_ENV='development';

module.exports = {
    mode:'development',
    target:'web',
    devtool:'cheap-module-source-map',
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
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            image: "./src/images/bg2.png",
        })
    ],
    module:{
       
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:'/node_modules/',
                use:["babel-loader","eslint-loader"]

            },
            {
                test:/(\.css)$/,
                use:["style-loader","css-loader"]
            },{
                test: /.(png|jpg|jpe?g|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=1024000' 
                       },
        ]
    }
}
