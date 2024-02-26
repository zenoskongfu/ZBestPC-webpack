const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const resolve = (pathStr) => {
	return path.resolve(__dirname, pathStr);
};
/**@type {import('webpack').Configuration}*/
module.exports = {
	mode: "development",
	entry: resolve("./src/index.js"),
	output: {
		path: resolve("./dist"),
		filename: "index.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
		new HtmlWebpackPlugin({
			template: resolve("./src/index.html"),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: resolve("./src/img"),
					to: resolve("./dist/img"),
				},
			],
		}),
	],
};
