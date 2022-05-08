import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath( import.meta.url ),
   __dirname = path.dirname( __filename ),
   ROOT = __dirname,
   DIST = path.resolve( `${ROOT}/dist` ),
   NODE_ENV = process.env.NODE_ENV || 'development',
   DEV = NODE_ENV !== 'production';

export default {

   mode: NODE_ENV,
   target: 'node',
   entry: {

      index: './src/server.js',
   },
   output: {

      path: DIST,
      filename: 'index.js',
      chunkFormat: 'module',
      library: {

         type: 'module',
      }
   },
   experiments: {

      outputModule: true,
   },
   plugins: [

      new ESLintPlugin({

         baseConfig: {

            parserOptions: {

               ecmaVersion: 'latest',
               sourceType: 'module'
            },
            extends: [

               'eslint:recommended',
               'plugin:sonarjs/recommended',
               'plugin:security/recommended',
            ],
            plugins: [

               'xss',
               'unicorn',
               'sonarjs',
               'promise',
               'security',
            ],
         },
         overrideConfig: {

            rules: {

               indent: [ 'error', 3 ]
            },
            globals: {

               DEV: false,
            },
         },
      }),
   ]
};
