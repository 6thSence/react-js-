const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const assets = require('postcss-assets');
const cssModules = require('postcss-modules');
const short = require('postcss-short');
const reporter = require('postcss-browser-reporter');
const stylelint = require('stylelint');
const rulesStyles = require('./stylelintrc.json');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader',
                exclude: /node_modules/ },
            { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    postcss: () => {
        return [
            nested,
            short,
            assets,
            autoprefixer,
            stylelint(rulesStyles),
            reporter()
        ];
    }
};