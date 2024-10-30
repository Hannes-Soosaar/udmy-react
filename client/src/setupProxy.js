const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    console.log("setting up proxy");
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
            logLevel: "debug", // Logs proxy activity
        })
    );
};