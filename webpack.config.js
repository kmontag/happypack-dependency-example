var path = require('path');
var HappyPack = require('happypack');

var useHappyPack = !process.env.STANDARD_WEBPACK;

var dummyLoader = {
  loader: 'dummy-loader',
  query: {
    dependency: path.resolve(__dirname, 'dependency.txt')
  }
}

module.exports = {
  entry: './a.js',
  output: {
    path: __dirname,
    filename: 'output.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [
          (useHappyPack ? 'happypack/loader' : dummyLoader)
        ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      loaders: [dummyLoader]
    })
  ]
}
