const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: "development",
  entry: {
    index: ["./src/js/index.js"],

  },
  output: {
    filename: 'js/[name].js',

    path: path.resolve(__dirname, 'dist'),


  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js|jsx$/,
  //       use: 'babel-loader',
  //       exclude: /node_modules/
  //     },

  //     {
  //       test: /\.css$/,     // 解析css
  //       use: ['style-loader', 'css-loader?modules'] // 从右向左解析
  //     }
  //   ]
  // },
  module: {
    rules: [

      {//ES6、JSX处理
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {

          plugins: [
            [
              "import",
              { libraryName: "antd", style: 'css' }
            ] //antd按需加载
          ]
        },
      },

      {//CSS处理
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
        exclude: /node_modules/,
      },

      {//antd样式处理
        test: /\.css$/,
        exclude: /src/,
        use: [
          { loader: "style-loader", },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist/html"),
    port: 9999
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/html/index.html"),
      filename: 'html/index.html',
    }),
    // new MiniCssExtractPlugin({//实例MiniCssExtractPlugin
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: 'css/[name].css',
    //   chunkFilename: '[id].css',
    // })
  ],
  resolve: {

    // 省略后缀
    extensions: ['.js', '.jsx', '.css']
  },
}