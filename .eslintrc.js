// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  // https://youtu.be/7Fcx8taSPEs?t=656
  // extends: [
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:react/recommended',
  //   'plugin:react-hooks/recommended',
  //   'airbnb',
  //   'plugin:prettier/recommended',
  //   'plugin:import/errors',
  //   'plugin:import/warnings',
  //   'plugin:import/typescript',
  //   'plugin:jsx-a11y/recommended',
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  // plugins: [
  //   'react',
  //   'react-hooks',
  //   'prettier',
  //   '@typescript-eslint',
  //   'import',
  //   'jsx-a11y',
  // ],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // 'comma-dangle': 'off',
    // 'comma-dangle': 'always',
    // 'comma-dangle': [2, 'always-multiline'],
    // 'comma-dangle': [
    //   'error',
    //   {
    //     arrays: 'never',
    //     objects: 'always',
    //     imports: 'never',
    //     exports: 'never',
    //     functions: 'never',
    //   },
    // ],
    'react/no-unused-prop-types': 'warn',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': 'error',
    'no-console': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-var': 'off',
    'vars-on-top': 'off',
    'no-loop-func': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/prop-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
};
