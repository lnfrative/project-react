// region import
const path = require('path')

// puglins
const HTMLPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ESLintPlugin = require('eslint-webpack-plugin')

// paths
const paths = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  source: {
    main: path.resolve(__dirname, '../src/'),
  },
  template: path.resolve(__dirname, './template.html'),
}

module.exports = (env, options) => ({
  entry: {
    main: [paths.entry.main],
  },
  output: {
    filename: './js/[name].bundle.js',
    chunkFilename: './js/chunkFilename.[name].bundle.js',
    path: path.resolve(__dirname, options.mode === 'production' ? '../dist' : '../build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          // options: {
          //   // presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          //   // plugins: ['@babel/plugin-proposal-class-properties'],
          // },
        },
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': paths.source.main,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HTMLPlugin({
      template: paths.template,
      filename: 'index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[id].css',
      ignoreOrder: false,
    }),
    new ESLintPlugin(),
  ],
})