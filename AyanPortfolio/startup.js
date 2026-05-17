var express = require('express');
var app = express();
var options = {
    index: ['index.html']
};
app.use('/', express.static('/home/site/wwwroot', options));
var server = app.listen(process.env.PORT);
server.keepAliveTimeout = (65 * 1000);
server.headersTimeout = (66 * 1000);
