const shared = require("./shared");

module.exports = shared.dev ? "eval" : "source-map";