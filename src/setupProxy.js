//这是解决跨域的文件
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bang.360.cn',
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};