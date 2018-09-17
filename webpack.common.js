const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname,  "dist"),
        filename: "js/[name].bundle.js"
    },
    module: {
        rules: [
            loaders.PugLoader,
            loaders.SCSSLoader,
            loaders.PostCSSLoader,
            loaders.JSLoader,
            loaders.ESLintLoader,
            loaders.IMGLoader,
            loaders.FONTLoader
        ]
    },
    plugins: [
        plugins.CSSExtractPlugin,
        plugins.StyleLintPlugin,
        plugins.CleanWebpackPlugin,
        plugins.HtmlExtractPlugin.HtmlExtractPlugin_Index
    ],
};