// @ts-nocheck
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.jsx', // 指定入口文件
  output: {
    filename: 'main.js', // 指定输出文件的名称
    path: path.resolve(__dirname, 'dist'), // 指定输出文件的目录
  },
  mode: 'development', // 指定模式为开发模式
  devtool: 'inline-source-map', // 生成source map，便于调试
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  devServer: {
    hot: true, // 启用热模块替换
    allowedHosts: 'all',
  },
  plugins: [
    // 创建一个HtmlWebpackPlugin实例
    new HtmlWebpackPlugin({
      // 指定模板文件，Webpack将基于这个模板生成HTML文件
      template: './index.html', // 这里指定你的HTML模板文件路径
      // 指定输出的HTML文件名，输出到dist目录
      filename: 'index.html',

      // 其他可配置项
      // 例如，指定title、inject（注入位置）、minify（压缩选项）等
      title: 'My App',
      inject: 'body', // 注入位置，可以是'head'、'body'、'true'或'false'
      minify: {
        collapseWhitespace: true, // 压缩HTML时移除空格
        removeComments: true, // 压缩HTML时移除注释
        // ... 其他压缩选项
      },

      // 如果需要引用额外的文件（如favicon.ico），可以配置favicon
      // favicon: './src/favicon.ico',

      // 其他的插件配置...
    }),
    // ... 其他插件
  ],
}
