const { join } = require('path')
const Webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const webpackProdConfig = {
  entry: {
    app: join(__dirname, '..', 'src', 'index'),
    vendor: ['react', 'react-dom']
  },
  output: {
    path: join(__dirname, '..', 'dist'),
    filename: '[name].[hash].js'
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
    new HtmlPlugin({
      title: 'Wolf Boilerplate React',
      template: join(__dirname, '..', 'src', 'html', 'index.html')
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new Webpack.optimize.UglifyJsPlugin(),
    new Webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new OfflinePlugin({
      AppCache: false,
      ServiceWorker: { events: true }
    })
  ]
}

module.exports = webpackProdConfig;
