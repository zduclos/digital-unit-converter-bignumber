import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
    {
        ignores: ['coverage/**', 'lib/**', 'node_modules/**']
    },
    {
        files: ['src/**/*.ts'],
        extends: [js.configs.recommended, tseslint.configs.recommended]
    }
);
