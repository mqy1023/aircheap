var webpack = require('webpack');
var path = require('path');
/*
 * Default webpack configuration for development
 */
var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'app/App')
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'},]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
};

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
}

module.exports = config;
