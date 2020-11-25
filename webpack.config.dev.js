const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './index.js',
    output:{
        filename:'main.bundle.js',
        // path:'C:/Users/VISURA/OneDrive/Desktop/DEP/Class/2020.11.24/Exercise/hello-webpack/dist',
        path:__dirname+'/dist/',
        publicPath:'',
        assetModuleFilename:'asset/[hash][ext][query]'
    },
    // mode:'production',
    module: {
        rules:[
            {
                test: /\.scss/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.(png|jepg|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                type:'asset/resource'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'main.min.css'
        }),
        
    ],
    devServer:{
        publicPath:'/dist/',
        watchContentBase:true,
        // contentBase:'.' meka ona na bydefault thiyenne eka nisa
    },
    mode: 'development'
}