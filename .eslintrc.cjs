module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh',  "tss-unused-classes"],
    rules: {
        "tss-unused-classes/unused-classes": "warn",
        'react-refresh/only-export-components': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        quotes: ['error', 'single'], // Preferowane pojedyncze cudzysłowy
        indent: ['error', 2], // Preferowane wcięcia dwoma spacjami
        semi: ['error', 'always'], // Wymagane średniki na końcu instrukcji
        'max-len': ['error', { code: 80 }, { "ignoreComments": true }], // Maksymalna długość wiersza 130 znaków
        camelcase: ['error', { properties: 'always' }], // Preferowany camelCase
        'arrow-body-style': ['off'], // Wyłączenie wymogu jednoznacznych nawiasów klamrowych wokół bloków instrukcji
        'no-unused-vars': ['warn', { vars: 'all', args: 'none' }], // Ostrzeżenie o nieużywanych zmiennych
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Wyłączenie wymogu określania typów zwracanych przez funkcje
        'react/react-in-jsx-scope': 'off', // Disable the 'react/react-in-jsx-scope' rule
        'object-curly-spacing': ['error', 'always'], // Enforce spaces between curly braces in imports
        'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 0 }]
    },
}
