module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                "presets": ["react", "es2015"],
                babelrc: false
            }
            //options: {
            //    "presets":["es2015"]
            //}
        }]
    }
}