const path = require('path')
module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'facebook-ui',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.s([ac])ss$/,
                use: ["style-loader", "css-loader", 'sass-loader']
            }
        ]
    }
}