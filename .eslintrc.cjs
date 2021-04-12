module.exports = {

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
   plugins: [

      'xss',
      'radar',
		'unicorn',
      'sonarjs',
      'promise',
      'security',
   ],
   rules: {

      indent: [ 'error', 3 ]
   },
};