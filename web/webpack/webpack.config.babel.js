const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
//const {Platform} = require("react-native");

module.exports = {
    context: fs.realpathSync(__dirname + '/../../'),
    entry: [
        "babel-polyfill",
        fs.realpathSync(__dirname + "/../../app/lib/Main.jsx")
    ],
    output: {
        path: fs.realpathSync(__dirname + '/../public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".css"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.css/,
                loader: "style-loader!css-loader?modules"
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.jsx?$/,
                loader: "source-map-loader",
                enforce: "pre"
            }
        ]
    },
    node: {
        module: 'empty',
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
        repl: "empty",
        crypto: true,
        this: true
    },
    externals: {
        "crypto": "crypto",
        "react-native": "react-native"
    },
    devServer: {
        contentBase: path.join(__dirname, "../public"),
        compress: true,
        port: 9000
    },
    target: "web",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                PLATFORM_ENV: JSON.stringify('web')
            }
        }),
        new webpack.ProvidePlugin({ "React": "react" })
    ]
}
