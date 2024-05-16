const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 'production' untuk build final
  entry: "./src/index.js", // File React utama
  output: {
    filename: "bundle.js", // Nama file bundle
    path: path.resolve(__dirname, "dist"), // Direktori output
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Target file JavaScript
        exclude: /node_modules/, // Kecualikan folder node_modules
        use: {
          loader: "babel-loader", // Gunakan loader Babel
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Preset Babel untuk ES6 dan React
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // File HTML template
      filename: "index.html", // Nama file HTML final
    }),
  ],
  devServer: {
    historyApiFallback: true, // Ganti URL yang tidak ada menjadi /index.html
    hot: true, // Suport Hot Module Replacement (HMR)
  },
};
