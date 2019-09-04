module.exports = {
  mode: 'development',
  entry: './client/components/app.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
    library: 'Reviews',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
