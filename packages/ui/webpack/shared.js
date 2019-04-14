const path = require("path");
const dev = process.env.NODE_ENV !== "production";
const destinationDir = dev ? "./build" : "./lib";
const contextPath = path.join(__dirname, "../src");
const baseAssetName = dev ? "[name]" : "[name].[contenthash]";

module.exports = {
    dev,
    destinationDir,
    contextPath,
    baseAssetName
};