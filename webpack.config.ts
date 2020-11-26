import { Configuration } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { ForkTsCheckerWebpackPlugin } from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WorkboxPlugin from 'workbox-webpack-plugin'

const ROOT = path.resolve(__dirname)

const isProduction = process.env.NODE_ENV === 'production'

const options = {
	async: false,
	// useTypescriptIncrementalApi: true,
	memoryLimit: 4096,
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

const config: Configuration = {
	entry: path.resolve(ROOT, 'src/index.tsx'),
	output: {
		path: path.resolve(ROOT, 'build'),
		filename: '[name].[contenthash].js',
	},
	mode: isProduction ? 'production' : 'development',
	plugins: [
		isProduction ? new CleanWebpackPlugin() : noop,
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		isProduction
			? noop
			: new ForkTsCheckerWebpackPlugin({
					async: true,
			  }),
		isProduction
			? new WorkboxPlugin.GenerateSW({
					clientsClaim: true,
					skipWaiting: true,
			  })
			: noop,
	],
	devServer: {
		contentBase: './build',
		proxy: {
			['/page']: {

			}
		}
	},
	optimization: {
		runtimeChunk: 'single',
		moduleIds: 'hashed',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							experimentalWatchApi: true,
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devtool: false,
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}

export default config
