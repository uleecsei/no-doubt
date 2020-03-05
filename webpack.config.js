const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    watch: true,
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist/",
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    root: "./index.html",
                    interpolate: true,
                },
            },
            {
                test: /\.txt$/,
                use: "raw-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                }),
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: "./postcss.config.js",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({ template: "./index.html" }),
    ],
};
