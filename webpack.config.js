const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const assets = require('postcss-assets');
const short = require('postcss-short');
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
                exclude: /node_modules/
            }
        ]
    },
    postcss: () => {
        return [
            nested,
            short,
            assets,
            autoprefixer,
            stylelint,
            reporter()
        ];
    }
};