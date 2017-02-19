const webpack = require('webpack');

//So we dont have any problems with paths
const path = require('path');

//We are going to use this to separate CSS from our scripts
const ExtractedTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        vendor: [
            'jquery',
            './vendor/index.ts',
            'materialize-css',
            'angular',
            'angular-ui-router'
        ],
        app: './app/app.module.ts'

    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'babel-loader!ts-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]*)?$/,
                loader: 'url?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file',
            },
            {
                //IMAGE LOADER
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file'
            }


        ]
    },
    postcss: function() {
        return [
            require('autoprefixer')({ /* ...options */ })
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery",
        })
    ],
    devtool: 'source-map',
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist')
    }
};