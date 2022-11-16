module.exports = {
    module: {
        rules: [
            {
                    test: /\.s[ac]ss$/,
                    use: [ 'style-loader', 'css-loader' ],
                    include: paths.appSrc,
                    loaders: [
                        require.resolve('style-loader'),
                        require.resolve('css-loader'),
                        require.resolve('sass-loader')
                    ]
                }
        ]
    }
}