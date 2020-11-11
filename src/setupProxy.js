const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {

  //로봇 명령 보내는 통신용 /1/robot/ptz/pan/ mv-forward
/*  app.use(createProxyMiddleware( '/public',{
      target: 'http://localhost:5000/',
      changeOrigin: true,
      secure: false
    })
  );*/
  //node.js 서버와의 통신용
  app.use(createProxyMiddleware( '/gnss',{
      target: 'http://192.168.219.125:8000/',
      changeOrigin: true,
      secure: false
    })
  );
};
