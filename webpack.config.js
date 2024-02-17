const path = require("path");
const webpack = require("webpack");
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
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
	],
};
