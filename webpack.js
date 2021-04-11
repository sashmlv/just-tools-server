'use strict';

import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const env = dotenv.config().parsed,
   __filename = fileURLToPath( import.meta.url ),
   __dirname = path.dirname( __filename ),
   ROOT = __dirname,
   DIST = path.resolve( `${ ROOT }/dist` ),
   NODE_ENV = env.NODE_ENV || 'development',
   DEV = NODE_ENV !== 'production';

export default {

   mode: NODE_ENV,
   target: 'node',
   entry: {

      index: './src/server.js',
   },
   experiments: {

      outputModule: true,
   },
   output: {

      path: DIST,
      filename: 'index.js',
      library: {

         type: 'module',
      }
   },
   plugins: [

      new ESLintPlugin({

         baseConfig: {

            extends: [

		         'eslint:recommended',
               'plugin:radar/recommended',
               'plugin:sonarjs/recommended',
               'plugin:security/recommended',
            ],
            parserOptions: {

               ecmaVersion: 12,
               sourceType: 'module'
            },
            env: {

               es6: true,
               browser: true
            },
            plugins: [

               'svelte3',
               'xss',
               'radar',
		         'unicorn',
               'sonarjs',
               'promise',
               'security',
            ],
            overrides: [
               {
                  files: [ '*.svelte' ],
                  processor: 'svelte3/svelte3'
               }
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

