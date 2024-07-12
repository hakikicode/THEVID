const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.push(
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.txt$/,
      use: 'raw-loader',
    }
  );

  return config;
};
