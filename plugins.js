const path = require('path');

//Delete folder dist everytime run script
const _CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPlugin = new _CleanWebpackPlugin(['dist']);

// Pug HTML extraction
const _HtmlWebpackPlugin = require("html-webpack-plugin");
const pug_folder = "./src/pug";

const HtmlExtractPlugin_Index = new _HtmlWebpackPlugin({
    filename: "index.html",
    template: `${pug_folder}/index.pug`,
    inject: false
});

//Inline CSS
const _HtmlWebpackInlineStylePlugin = require('html-webpack-inline-style-plugin');
const HtmlWebpackInlineStylePlugin = new _HtmlWebpackInlineStylePlugin();


module.exports = {
    CleanWebpackPlugin: CleanWebpackPlugin,
    HtmlWebpackInlineStylePlugin: HtmlWebpackInlineStylePlugin,
    HtmlExtractPlugin: {
        HtmlExtractPlugin_Index: HtmlExtractPlugin_Index
    }
};
