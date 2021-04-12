import eslint from '@rollup/plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';

const NODE_ENV = process.env.NODE_ENV || 'development',
   DEV = NODE_ENV !== 'production';

export default {

   input: 'src/server.js',
   output: {

      file: 'dist/index.js',
      format: 'es'
   },
   plugins: [

      eslint(),
      sourcemaps(),
      ...(DEV ? [terser()] : [])
   ],
};
