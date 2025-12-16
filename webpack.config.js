const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { container } = require("webpack");
const Dotenv = require("dotenv-webpack");

// Load environment variables
require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "development"}` });
require("dotenv").config(); // Load base .env

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.tsx",
  mode: isDevelopment ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: process.env.PUBLIC_URL || "http://localhost:3002/",
    clean: true,
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared/types": path.resolve(__dirname, "../shared-types/src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: `.env.${process.env.NODE_ENV || "development"}`,
      safe: false,
      systemvars: true,
      defaults: ".env",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Module Two",
    }),
    new container.ModuleFederationPlugin({
      name: "module_two",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
        // Card removed
        "./actions": "./src/actions.ts",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
        "react-router-dom": { singleton: true, requiredVersion: "^6.20.0" },
      },
    }),
  ],
  devtool: isDevelopment ? "source-map" : false,
};
