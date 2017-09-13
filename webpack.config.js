module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dest`,
    },
	module: {
		rules: [
		{
			test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                postLoaders: {
                    js: 'babel-loader?presets=es2015',
                },
            },
        },
        {
            test: /\.js$/,
            loader: 'babel-loader?presets=es2015',
        },
        {
            test: /\.(css|sass|scss)$/,
            loader: 'sass-loader',
        },
		],
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
	},
    devServer: {
        contentBase: 'dest',
    },
}
