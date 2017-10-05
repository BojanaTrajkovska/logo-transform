const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractSass = new ExtractTextPlugin({
    filename: "build.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        app: './index.js',
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, `dist`)
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
        ]
    },
    devtool: 'cheap-source-map',

    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: `./index.html`,
            inject: 'body',
            hash: true
        })
    ]
};