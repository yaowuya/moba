const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//在 dist 目录中已经把 css 抽取到单独的一个 css 文件中了。
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')//压缩 CSS
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge')
const common = require('./webpack.common')

let prodConfig = {
  mode: 'production',
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',//常用的就是使用 PostCSS 进行添加前缀
            options: {
              ident: 'postcss',//必须要有
              sourceMap: true,
              plugins: loader => [
                autoprefixer({ browsers: ['> 0.15% in CN'] }) // 添加前缀
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css', // 设置最终输出的文件名,name和output filename一样
      chunkFilename: '[id].[hash].css'
    })
  ],
  optimization: {
    minimize: true,//webpack4已经清楚UglifyJsPlugin
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: "all",          //async异步代码分割 initial同步代码分割 all同步异步分割都开启
      minSize: 30000,         //字节 引入的文件大于30kb才进行分割
      //maxSize: 50000,         //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
      minChunks: 1,           //模块至少使用次数
      maxAsyncRequests: 5,    //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
      maxInitialRequests: 3,  //首页加载的时候引入的文件最多3个
      automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
      name: true,                  //缓存组里面的filename生效，覆盖默认命名
      cacheGroups: { //缓存组，将所有加载模块放在缓存里面一起分割打包
        vendors: {  //自定义打包模块
          test: /[\\/]node_modules[\\/]/,
          priority: -10, //优先级，先打包到哪个组里面，值越大，优先级越高
          filename: 'vendors.js',
        },
        default: { //默认打包模块
          priority: -20,
          reuseExistingChunk: true, //模块嵌套引入时，判断是否复用已经被打包的模块
          filename: 'common.js'
        }
      }
    }
  },
}

module.exports = merge(common, prodConfig)
