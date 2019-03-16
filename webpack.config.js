const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test:/\.s?css$/,
            // ? makes the s optional, so now test supports .css and .scss both
            use:['style-loader', 'css-loader','sass-loader']
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

};