const path = require("path");
const glob = require("glob");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};