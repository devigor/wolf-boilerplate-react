const { join } = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const webpackDevConfig = {
  entry: {
    app: join(__dirname, 'src', 'index')
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)&/,
        loader: 'file-loader',
        options: { name: '[name].[hash].[ext]' }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'Wolf Boilerplate React',
      template: join(__dirname, 'src', 'html', 'index.html')
    })
  ]
}

module.exports = webpackDevConfig;
