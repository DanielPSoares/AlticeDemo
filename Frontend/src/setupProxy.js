const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/weatherforecast",
    "/api/Survey"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'http://localhost:5088',
        secure: false
    });

    app.use(appProxy);
};
