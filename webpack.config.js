const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['regenerator-runtime/runtime.js', './src/app.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env',
                  { targets: "defaults" },
                  '@babel/preset-react']
              ]
            }
          }
        }, {
          test: /\.s?css$/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
        }, {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader'
            },
          ],
        }
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        historyApiFallback: true,
        hot: true,
        watchOptions: { 
          aggregateTimeout: 300, 
          poll: true 
        }
    }
}