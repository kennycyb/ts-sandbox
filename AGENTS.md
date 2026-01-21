# AGENTS.md

This document provides comprehensive information about the ts-sandbox repository to help AI agents and developers understand the project structure, purpose, and conventions.

## Repository Overview

**Name:** ts-sandbox  
**Purpose:** A TypeScript sandbox repository for experimenting with TypeScript, linting, and code formatting tools  
**License:** MIT

This is a learning and experimentation repository designed to explore TypeScript development workflows, particularly focusing on:
- TypeScript compilation and configuration
- Google TypeScript Style (GTS) linting and formatting
- Code quality tools and best practices

## Repository Structure

```
ts-sandbox/
├── .editorconfig          # Editor configuration for consistent coding styles
├── .eslintignore          # ESLint ignore patterns
├── .eslintrc.json         # ESLint configuration (extends GTS)
├── .gitignore             # Git ignore patterns
├── .prettierrc.js         # Prettier configuration
├── LICENSE                # MIT License
├── README.md              # Basic project description
├── docs/                  # Documentation files
│   ├── gts.md            # Google TypeScript Style documentation
│   ├── pnpm.md           # pnpm package manager notes
│   └── typescript.md     # TypeScript setup instructions
├── index.ts              # Root-level TypeScript file with hello function
├── package.json          # Node.js project configuration
├── package-lock.json     # npm dependency lock file
├── src/                  # Source code directory
│   └── index.ts          # Example TypeScript source file with linting examples
├── tsconfig.json         # TypeScript compiler configuration
└── build/                # Output directory for compiled JavaScript (gitignored)
```

## Key Files

### Source Files
- **index.ts**: Contains a simple "hello world" function
- **src/index.ts**: Contains example code demonstrating various linting scenarios

### Configuration Files
- **tsconfig.json**: TypeScript compiler options
  - Target: ES2016
  - Module: CommonJS
  - Strict mode enabled
  - Output directory: ./build
  
- **.eslintrc.json**: Extends Google TypeScript Style (GTS)
- **package.json**: Defines project scripts and dependencies

## Build System

### Dependencies
- **TypeScript**: ^5.3.3
- **GTS (Google TypeScript Style)**: ^5.2.0
- **@types/node**: 20.8.2

### Available Scripts

```bash
# Build the project (compile TypeScript)
npm run build

# Run linting checks
npm run lint

# Auto-fix linting issues
npm run fix

# Compile TypeScript
npm run compile

# Clean build artifacts
npm run clean
```

## Coding Conventions

### TypeScript Style
- **Style Guide**: Google TypeScript Style (GTS)
- **Strict Mode**: Enabled
- **Module System**: CommonJS
- **Code Formatting**: Automated via GTS

### Best Practices
- Use strict TypeScript type checking
- Follow GTS linting rules
- Keep code properly formatted with `npm run fix`
- Use proper indentation (no tabs in code)
- Avoid trailing semicolons (double semicolons)
- Maintain consistent line length

## Development Workflow

1. **Setup**: Install dependencies with `npm install`
2. **Development**: Write TypeScript code in `src/` or root directory
3. **Linting**: Run `npm run lint` to check code quality
4. **Fix Issues**: Run `npm run fix` to auto-fix linting problems
5. **Build**: Run `npm run build` to compile TypeScript to JavaScript
6. **Output**: Compiled files appear in `./build/` directory

## Testing

Currently, the project does not have a test suite implemented. The test script returns an error:
```bash
npm test  # Returns: "Error: no test specified"
```

## Documentation

The `docs/` folder contains setup and reference documentation:
- **gts.md**: Information about Google TypeScript Style
- **typescript.md**: TypeScript setup instructions
- **pnpm.md**: pnpm package manager installation notes

## Purpose and Goals

This repository serves as:
1. A **learning environment** for TypeScript development
2. A **sandbox** for experimenting with linting and formatting tools
3. A **demonstration** of GTS (Google TypeScript Style) integration
4. A **template** for TypeScript project setup with proper tooling

## Notes for AI Agents

- This is an experimental/learning repository, not a production application
- Code in `src/index.ts` intentionally contains linting violations for demonstration purposes
- The primary focus is on tooling and TypeScript configuration rather than application functionality
- When making changes, ensure they maintain compatibility with GTS rules
- Always run `npm run lint` and `npm run build` to verify changes
