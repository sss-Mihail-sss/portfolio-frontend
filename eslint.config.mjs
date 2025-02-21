import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next',
    ],
    rules: {
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'quotes': ['error', 'single'],
      'linebreak-style': ['error', 'unix'],
      'semi': ['error', 'always'],
      'import/order': [
        'error',
        {
          'groups': [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
            'style',
          ],
          'pathGroups': [
            {
              'pattern': '**/*.css',
              'group': 'style',
              'position': 'after',
            },
            {
              'pattern': '**/*.scss',
              'group': 'style',
              'position': 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
    },
  }),
];

export default eslintConfig;
