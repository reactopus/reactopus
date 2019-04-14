const config = require("require-dir")("./webpack");
const _ = require("lodash");

module.exports = _.omit(config, ["shared"]);