const path = require('path')
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'doc')
    },
    entry: {
        example: './examples/script.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'facebook-ui',
            template: './examples/index.html',
            filename: 'example.html'
        })
    ]
})
