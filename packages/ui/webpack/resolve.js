const shared = require("./shared");

module.exports = {
    extensions: [".ts", ".tsx", ".js"],

    modules: [shared.contextPath, "node_modules"]
};