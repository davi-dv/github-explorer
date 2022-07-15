const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // entry -> arquivo principal da nossa aplicação
  entry: path.resolve(__dirname, "src", "index.tsx"),
  // output arquivo que vou gerar de saída
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // arquivos que o webpack vai entender
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  module: {
    // regras para o webpack ler os arquivos
    rules: [
      {
        // test -> webpack verifica tipo de arquivo com uma expressão regular
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        // utiliza o babel para converter o arquivo identificado pelo webpack
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      // para arquivo css
      {
        // test -> webpack verifica tipo de arquivo com uma expressão regular
        test: /\.scss$/,
        exclude: /node_modules/,
        // utiliza o babel para converter o arquivo identificado pelo webpack
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
