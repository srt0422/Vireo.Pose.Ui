const path = require("path");
const webpack = require("webpack");
const {Platform} = require("react-native");

module.exports = {
    context: path.resolve(__dirname, '../../'),
    entry: [
        "babel-polyfill",
        path.join(__dirname, "../../app/web/public/js/lib/Main")
    ],
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ["", ".js", ".css"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: "node_modules",
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"],
                    plugins:[]
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css/,
                loader: "style-loader!css-loader?modules"
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
        "crypto": "crypto"
    },
    devServer: {
        contentBase: path.join(__dirname, "../public"),
        compress: true,
        port: 9000
    },
    target: "web",
    plugins: [new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                PLATFORM_ENV: JSON.stringify('web')
            }
        })]
}
