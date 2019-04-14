const webpack = require("webpack");
const shared = require("./shared");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ForkTsCheckerWebpackPluginConfig = new ForkTsCheckerWebpackPlugin({
    tsconfig: "../tsconfig.json",
    tslint: "../tslint.json"
});

const BundleAnalyzerPluginConfig = new BundleAnalyzerPlugin({
    analyzerMode: "static",
    openAnalyzer: false
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [shared.destinationDir]
});

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: "./index.handlebars",
    filename: "index.html",
    inject: "body",
    minify: shared.dev ? false : {
        collapseWhitespace: true
    },
    templateParameters: {
        isProduction: !shared.dev,
        isDevelopment: shared.dev
    }
});

const DefinePluginConfig = new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
    filename: `__${shared.baseAssetName}.css`
});

const CompressionPluginConfig = new CompressionPlugin();

const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();

const plugins = [
    HTMLWebpackPluginConfig,
    ForkTsCheckerWebpackPluginConfig,
    MiniCssExtractPluginConfig,
    DefinePluginConfig
];

if (shared.dev) {

    plugins.unshift(
        HotModuleReplacementPluginConfig,
    );

} else {

    plugins.push(
        CleanWebpackPluginConfig,
        CompressionPluginConfig
    );

    if (process.env.ANALYZE_BUNDLE === "true") {
        plugins.push(BundleAnalyzerPluginConfig);
    }
}

module.exports = plugins;