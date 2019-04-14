const path = require("path");
const shared = require("./shared");

module.exports = {
    path: path.resolve(__dirname, "..", shared.destinationDir),
    publicPath: "/",
    chunkFilename: `__${shared.baseAssetName}.js`,
    filename: `${shared.baseAssetName}.js`,
    libraryTarget: "umd"
};