var config = require('./webpack.base.config'),
  path = require('path'),
  webpack = require('webpack');
var merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

config = merge(config, {
  entry: {
    app: './src/app.js'
  },
  externals: {
    'knockout': 'window.ko',
    'jquery': 'window.$'
  },
  devtool: 'inline-source-map',
  devServer: {
    quiet: true,
    contentBase: '../dist',
    hot: true,
    proxy: {
      '/cpu-basedocrefer': {
        target: 'http://yc.yonyou.com',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/yuncai': {
        target: 'http://yc.yonyou.com',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/file1': {
        target: 'http://yc.yonyou.com',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/file': {
        target: 'http://yc.yonyou.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/file': '/file1'},
        host: "yc.yonyou.com"
      },
      '/cpu-score':{
        target: 'http://yc.yonyou.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/file': '/file1'},
        host: "yc.yonyou.com"
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'ucloud-ko-select'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(dashboard.setData),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
})
module.exports = config
