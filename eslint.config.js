import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // Игнорируем служебные/конфиг-файлы и собранные директории
    {
        ignores: [
            'node_modules/',
            'dist/',
            '.vite/',
            // любые конфиги инструментов
            '*.config.*',
            // если оставишь css артефакты — тоже можно игнорить
            'css/',
        ],
    },

    // Базовые правила для браузерного ESM-кода
    js.configs.recommended,
    prettier,

    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                window: true,
                document: true,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },
    },

    // Отдельно: любые *.cjs и *config* — это Node/CommonJS
    {
        files: ['**/*.cjs', '**/*config*.{js,cjs,mjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                // чтобы не ругался на require/module в конфиг-файлах
                require: 'readonly',
                module: 'readonly',
                __dirname: 'readonly',
                process: 'readonly',
            },
        },
    },
];