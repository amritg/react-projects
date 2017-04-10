module.exports = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: "/",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
    
}