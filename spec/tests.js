var RIF = require('../src/index');

require('babel-core/register')({
  presets: ['babel-preset-react'],
  plugins: [RIF],
  cache: false
});

require('./test/r-if.test');
require('./test/r-else.test');
