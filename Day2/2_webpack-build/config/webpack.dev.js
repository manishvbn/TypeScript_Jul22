const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = function (env) {
    return merge(commonConfig(env), {
        mode: 'development',

        devtool: 'eval-cheap-source-map',

        output: {
            publicPath: 'http://localhost:3000/',
            filename: '[name].js'
        },

        devServer: {
            port: 3000,
            historyApiFallback: true,
            client: {
                logging: "none"
            },
            devMiddleware: {
                stats: 'minimal'
            },
            open: {
                app: {
                    name: 'Chrome'
                }
            },
            hot: true
        }
    });
};