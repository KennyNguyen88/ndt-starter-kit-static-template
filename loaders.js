const plugins = require('./plugins');

const PugLoader = {
    test: /\.pug$/,
    use: 'pug-loader'
};

const SCSSLoader = {
    test: /\.scss$/,
    use: plugins.CSSExtractPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {importLoaders: 1},
            },
            {
                loader: 'resolve-url-loader'
            },
            {
                loader: 'sass-loader',
                options:{
                    allChunks: true
                }
            }
        ],
    }),
};

const PostCSSLoader = {
    test: /\.css$/,
    use: [ 'style-loader', 'postcss-loader' ]
};

const JSLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['env']
        }
    }
};

const ESLintLoader = {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
        loader: 'eslint-loader',
        options: {
            configFile: __dirname + '/.eslintrc'
        },
    }
};

const IMGLoader = {
    test: /\.(png|svg|jpg|gif|jpeg|ico)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'images/'
        }
    }
};

const FONTLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
        }
    }
};

module.exports = {
    PugLoader: PugLoader,
    SCSSLoader: SCSSLoader,
    PostCSSLoader: PostCSSLoader,
    JSLoader: JSLoader,
    ESLintLoader: ESLintLoader,
    IMGLoader: IMGLoader,
    FONTLoader: FONTLoader
};