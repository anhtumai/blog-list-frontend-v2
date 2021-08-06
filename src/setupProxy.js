const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://blog-list-backend-l3isj.ondigitalocean.app/",
      changeOrigin: true,
    })
  );
};
