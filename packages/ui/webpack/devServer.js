const shared = require("./shared");
const port = process.env.PORT || 3000;

const devServer = {
    contentBase: shared.destinationDir,
    clientLogLevel: "none",
    host: "localhost",
    port,
    hot: true,
    inline: true,
    progress: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
};

module.exports = devServer;