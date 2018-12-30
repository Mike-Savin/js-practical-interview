const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const utils = require('./utils');

const HOST = 'localhost';
const PORT = 7500;

module.exports = {
  mode: 'development',

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'client/dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: 'client/dist',
    quiet: true,
    watchOptions: {
      poll: true
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'src': utils.resolve('src'),
      'css': utils.resolve('src/css'),
      'images': utils.resolve('src/images'),
      'pages': utils.resolve('src/js/pages'),
      'components': utils.resolve('src/js/components')
    }
  },
  entry: [
    './client/src/js/app.js'
  ],
  output: {
    path: utils.resolve('dist/js')
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('images/[name].[hash:7].[ext]')
          }
        }
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        filename: utils.resolve('dist/index.html'),
        template: utils.resolve('index.html'),
        inject: true
      }),
      new VueLoaderPlugin(),
      new CopyWebpackPlugin([{
        from: utils.resolve('src/images'),
        to: utils.resolve('dist/images'),
        toType: 'dir'
      }]),
      new webpack.HotModuleReplacementPlugin()
    ]
};
