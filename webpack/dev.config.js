const { resolve } = require('path')
const Webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const webpackDevConfig = {
  entry: {
    app: resolve(__dirname, '..', 'src', 'index')
  },
  output: {
    filename: '[name].js',
    publicPath: ''
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: 'Wolf Boilerplate React',
      template: resolve(__dirname, '..', 'src', 'html', 'index.html')
    })
  ]
}

module.exports = webpackDevConfig;
