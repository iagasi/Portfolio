// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let htmlPageNames = ['index', 'donate',];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
   // chunks: [`${name}`] // respective JS files
  })
});


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: true
     },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        // new HtmlWebpackPlugin(
        //     {
        //         title: "Zoo",
        //         template: "./src/index.html",
                

        //     },
        // ),
     
        new MiniCssExtractPlugin({
            filename: "style.css"
        })

    ]
    .concat(multipleHtmlPlugins),
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                //   "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ],

            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
