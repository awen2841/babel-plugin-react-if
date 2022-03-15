const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const RIF = require('../src/index');

Enzyme.configure({ adapter: new Adapter() });

require('@babel/register')({
  presets: ['@babel/preset-react'],
  plugins: [RIF],
  cache: false,
});

require('./test/r-if.test');
require('./test/r-else.test');
require('./test/r-else-if.test');
