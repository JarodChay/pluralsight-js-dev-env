import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map', // https://webpack.github.io/docs/configuration.html#devtool; https://webpack.js.org/configuration/devtool/#src/components/Sidebar/Sidebar.jsx
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web', // Target electron for desktop JavaScript apps
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}
