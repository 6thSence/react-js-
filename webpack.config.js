const autoprefixer = require('autoprefixer');
const reporter = require('postcss-browser-reporter');
const stylelint = require('stylelint');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css!postcss-loader" },
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    postcss: () => {
        return [
            autoprefixer,
            stylelint,
            reporter()
        ];
    }
};