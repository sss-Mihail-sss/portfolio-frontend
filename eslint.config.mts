import { Linter } from 'eslint';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginQuery from '@tanstack/eslint-plugin-query';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const restrictedImports: Linter.RulesRecord = {
  'no-restricted-imports': [
    'error',
    {
      name: 'next/link',
      message: 'Please import from `@/i18n/routing` instead.',
    },
    {
      name: 'next/navigation',
      importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
      message: 'Please import from `@/i18n/routing` instead.',
    },
    {
      name: 'tailwind-variants',
      importNames: ['tv'],
      message: 'Please import from `@/lib/utils` instead.',
    },
  ],
};

const importOrder: Linter.RulesRecord = {
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      pathGroups: [
        {
          pattern: '@/ui/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '@/components/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '@/**',
          group: 'internal',
          position: 'after',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin', 'external'],
      'newlines-between': 'always',
    },
  ],
}

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': 'error',
      ...restrictedImports,
      ...importOrder
    },
  }),
  ...pluginQuery.configs['flat/recommended'],
];

export default eslintConfig;
