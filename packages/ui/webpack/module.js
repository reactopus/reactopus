const shared = require("./shared");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    rules: [
        {
            test: /\.handlebars$/,
            loader: "handlebars-loader"
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false
                }
            }
        },
        {
            test: /\.scss$/,
            use: [
                shared.dev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader", options: {
                        sourceMap: shared.dev,
                        modules: true,
                        importLoaders: 1,
                        localIdentName: shared.dev ? "[name]__[local]___[hash:base64:5]" : "[hash:base64:5]"
                    }
                },
                {
                    loader: "sass-loader", options: {
                        includePaths: [
                            shared.contextPath
                        ]
                    }
                }
            ]
        }
    ]
};