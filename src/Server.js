const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/geonames', createProxyMiddleware({
    target: 'http://api.geonames.org',
    changeOrigin: true,
    pathRewrite: {
        '^/geonames': '', // Remueve el prefijo /geonames al hacer la solicitud
    },
}));

app.listen(3000, () => {
    console.log('Proxy server is running on port 3000');
});
