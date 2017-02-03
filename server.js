require('babel-core/register');
require('babel-polyfill');

var app = require('./app');
var PORT = 3000;
app.listen(PORT, function () {
  console.info('Server is running, port: ', PORT);

  process.on('uncaughtException', function (err) {
    console.error('Caught exception: ', err.stack);
  });
  process.on('unhandledRejection', function (reason, p) {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack);
  });
});