const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
			target: "https://blog-list-backend.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
