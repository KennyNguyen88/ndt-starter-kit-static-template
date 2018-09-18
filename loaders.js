const plugins = require('./plugins');

const PugLoader = {
    test: /\.pug$/,
    use: 'pug-loader'
};

const CSSLoader = {
    test: /\.css$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].css',
            outputPath: 'css/'
        }
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
    CSSLoader: CSSLoader,
    IMGLoader: IMGLoader,
    FONTLoader: FONTLoader
};