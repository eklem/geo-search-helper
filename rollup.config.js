import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import license from 'rollup-plugin-license'

export default [
  // browser-friendly UMD build
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: './src/index.js',
    output: [
      { name: 'gsh', file: './dist/geo-search-helper.umd.js', format: 'umd', exports: 'named' },
      { file: './dist/geo-search-helper.cjs.js', format: 'cjs' },
      { file: './dist/geo-search-helper.esm.mjs', format: 'es' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  },
  // Minified versions
  {
    input: './src/index.js',
    output: [
      { name: 'gsh', file: './dist/geo-search-helper.umd.min.js', format: 'umd', exports: 'named' },
      { file: './dist/geo-search-helper.cjs.min.js', format: 'cjs' },
      { file: './dist/geo-search-helper.esm.min.mjs', format: 'es' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      terser(), // Minify
      license({ // Add reference to license file for minified scripts
        banner: {
          commentStyle: 'regular', // The default
          content: {
            file: path.join(__dirname, './src/license-references.txt')
          }
        }
      })
    ]
  }
]
