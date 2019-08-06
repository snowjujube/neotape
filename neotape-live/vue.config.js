module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "px2rem-loader",
              options: {
                remUni: 75,
                remPrecision: 8
              }
            }
          ]
        }
      ]
    }
  }
};
