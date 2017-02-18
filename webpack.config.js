var path = require('path');
var webpack = require('webpack');
var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
    entry: {
        app: './src/scripts/app.tsx',
        vendor: ['jquery', 'react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build/scripts'),
        filename: PROD ? './[name].min.js' : './[name].js'
    },
    devtool: 'source-map',
    resolve: {  
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: PROD ? "vendor.min.js" : "vendor.js" }),
        new webpack.optimize.UglifyJsPlugin({ include: /\.min\.js$/, output: { comments: false }, compress: { warnings: false } })
    ],
    module: {
        loaders: [
            { test: /\.tsx$/, loader: 'ts-loader', include: [ path.resolve(__dirname, "src/scripts") ], exclude: '/node_modules/' },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], include: [ path.resolve(__dirname, "src/styles") ] },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'], include: [ path.resolve(__dirname, "src/styles") ] }
        ]
    }
}