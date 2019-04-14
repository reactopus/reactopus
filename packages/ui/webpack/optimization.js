const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const OptimizeCSSAssetsPluginConfig = new OptimizeCSSAssetsPlugin({});
const UglifyJsPluginConfig = new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true
});

module.exports = {
    noEmitOnErrors: true,
    minimizer: [
        UglifyJsPluginConfig,
        OptimizeCSSAssetsPluginConfig
    ],
    splitChunks: {
        cacheGroups: {
            styles: {
                name: "styles",
                test: /\.css$/,
                chunks: "all",
                enforce: true
            },
            common: {
                name: "common",
                test: /[\\/]node_modules[\\/]/,
                chunks: "all",
                priority: 1
            }
        }
    }
};