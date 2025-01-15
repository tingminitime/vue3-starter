import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  /* configures for antfu's config */
  {
    vue: {
      overrides: {
        'vue/no-unused-vars': 'warn',
        'vue/max-attributes-per-line': 'error',
        'vue/html-self-closing': ['error', {
          html: {
            void: 'never',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        }],
      },
    },
    javascript: {
      overrides: {
        'no-unused-vars': 'warn',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'unused-imports/no-unused-imports': 'warn',
      },
    },
    ignores: [
      'node_modules/',
      'dist/',
      '.output/',
      '.nuxt/',
      '.storybook/',
      'storybook-static',
      '.github/',
      'coverage',
      '*.log',
      'nuxt.d.ts',
      '.DS_Store',
      '.vscode/',
      '*.md',
      'netlify.toml',
      'README.md',
      'package.json',
      'package-lock.json',
      'babel.config.js',
      '*.toml',
      'graphql',
      'types.ts',
      'generated',
      'components.d.ts',
      'icons.d.ts',
      'auto.d.ts',
      'src-tauri',
      'auto-imports.d.ts',
      'components.d.ts',
    ],
  },
  /* From the second arguments they are ESLint Flat Configs */
  {
    rules: {
      'no-console': 'warn',
      'node/prefer-global/process': 'off',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: {
      tw: tailwindcss,
    },
    rules: {
      /* Add custom rules */
      'tw/classnames-order': 'error',
      'tw/enforces-negative-arbitrary-values': 'error',
      'tw/enforces-shorthand': 'error',
      'tw/migration-from-tailwind-2': 'error',
      'tw/no-arbitrary-value': 'off',
      'tw/no-custom-classname': [
        'warn',
        {
          whitelist: [
            'my\\-(.*)', // You can rewrite this regex
            'theme-toggle',
          ],
        },
      ],
      'tw/no-contradicting-classname': 'error',
    },
  },
)
