import path from 'node:path'
import nodeExternals from 'webpack-node-externals'

/** @type {import('webpack').Configuration} */
export default {
  entry: {
    index: path.resolve('src', 'index.ts')
  },
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: '[name].cjs',
    library: {
      type: 'commonjs'
    }
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
}
