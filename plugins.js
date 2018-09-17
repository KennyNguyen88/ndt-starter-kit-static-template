const path = require('path');

//CSS extraction
const _ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtractPlugin = new _ExtractTextPlugin('[name].bundle.css');

//Css Lint
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const StyleLintPlugin = new _StyleLintPlugin({
    configFile: path.resolve(__dirname, 'stylelint.config.js'),
    context: path.resolve(__dirname, './src/css'),
    files: '**/*.css',
    failOnError: false,
    quiet: false,
});

//Delete folder dist everytime run script
const _CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPlugin = new _CleanWebpackPlugin(['dist']);


// Pug HTML extraction
const _HtmlWebpackPlugin = require("html-webpack-plugin");
const pug_folder = "./src/pug";

const HtmlExtractPlugin_Index = new _HtmlWebpackPlugin({
    filename: "index.html",
    template: `${pug_folder}/index.pug`
});

module.exports = {
    CSSExtractPlugin: CSSExtractPlugin,
    StyleLintPlugin: StyleLintPlugin,
    CleanWebpackPlugin: CleanWebpackPlugin,
    HtmlExtractPlugin: {
        HtmlExtractPlugin_Index: HtmlExtractPlugin_Index
    }
};
