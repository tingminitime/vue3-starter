# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: This project uses `pnpm` as the package manager (required v10.0.0+).

**Core Development Commands**:
- `pnpm dev` - Start development server with Vite
- `pnpm build` - Type check with vue-tsc and build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint on the codebase
- `pnpm typecheck` - Run TypeScript type checking without emitting files
- `pnpm test` - Run Vitest tests in run mode
- `pnpm test:watch` - Run Vitest tests in watch mode

## Architecture Overview

This is a Vue 3 starter project with the following stack:
- **Vue 3** with Composition API and `<script setup>` syntax
- **Vue Router v4** for client-side routing
- **Pinia** for state management using setup stores pattern
- **TailwindCSS v4** for styling
- **VueUse** for composable utilities
- **Vite** as build tool with TypeScript support
- **Vitest** for unit testing with jsdom environment

## Key Architectural Patterns

**Auto-imports**: The project uses `unplugin-auto-import` to automatically import:
- Vue APIs (`ref`, `computed`, `watch`, etc.)
- Vue Router APIs (`useRouter`, `useRoute`, etc.)
- VueUse composables
- Custom composables from `src/composables/**`

**Auto-components**: Components are auto-imported using `unplugin-vue-components`, so no manual imports needed for Vue components.

**Path Alias**: `~/` maps to `src/` directory (configured in both Vite and TypeScript).

**File Structure**:
- `src/pages/` - Route components (file-based routing structure)
- `src/router/routes.ts` - Route definitions
- `src/stores/` - Pinia stores using setup syntax
- `src/composables/` - Custom composables (auto-imported)
- `src/components/` - Reusable Vue components
- `src/styles/main.css` - Global styles and TailwindCSS imports

## ESLint Configuration

Uses `@antfu/eslint-config` with additional rules:
- `eslint-plugin-better-tailwindcss` for TailwindCSS class validation
- Custom Vue-specific rules for consistent formatting
- Warns on console usage and unused variables/imports
- Enforces single-line attribute preference and consistent line wrapping

## Testing Setup

- **Vitest** with jsdom environment for DOM testing
- **@vue/test-utils** for Vue component testing
- Test files should be placed alongside source files or in dedicated test directories
- Example test files: `src/components/tests/` and `src/stores/tests/`

## Development Notes

- TypeScript is configured with strict mode enabled
- Vue DevTools plugin is enabled in development
- TailwindCSS v4 is configured with PostCSS and Vite integration
- Dark mode support is implemented via VueUse (`src/composables/dark.ts`)