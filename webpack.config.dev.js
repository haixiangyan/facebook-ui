const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: "development",
    entry: {
        script: './examples/script.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'facebook-ui',
            template: './examples/index.html'
        })
    ]
})