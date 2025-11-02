# Project Dependencies

## Overview
This document lists all dependencies required for the Credo Migration Services project.

## Quick Install
To install all dependencies at once, run:
```bash
npm install
```

Or if you prefer using other package managers:
```bash
# Using pnpm
pnpm install

# Using yarn
yarn install
```

---

## Production Dependencies

### Core Framework
- **next** (^14.2.0)
  - React framework for production-grade applications
  - Provides server-side rendering, routing, and optimization
  - Installation: `npm install next`

### React Libraries
- **react** (^18.3.0)
  - JavaScript library for building user interfaces
  - Installation: `npm install react`

- **react-dom** (^18.3.0)
  - React package for working with the DOM
  - Installation: `npm install react-dom`

---

## Development Dependencies

### TypeScript Support
- **typescript** (^5.0.0)
  - TypeScript language compiler
  - Adds static typing to JavaScript
  - Installation: `npm install -D typescript`

- **@types/node** (^20.0.0)
  - Type definitions for Node.js
  - Installation: `npm install -D @types/node`

- **@types/react** (^18.3.0)
  - Type definitions for React
  - Installation: `npm install -D @types/react`

- **@types/react-dom** (^18.3.0)
  - Type definitions for React DOM
  - Installation: `npm install -D @types/react-dom`

### Styling Tools
- **tailwindcss** (^3.4.0)
  - Utility-first CSS framework
  - Installation: `npm install -D tailwindcss`

- **postcss** (^8.4.0)
  - Tool for transforming CSS with JavaScript
  - Required by Tailwind CSS
  - Installation: `npm install -D postcss`

- **autoprefixer** (^10.4.0)
  - PostCSS plugin to parse CSS and add vendor prefixes
  - Installation: `npm install -D autoprefixer`

---

## Installation Instructions

### Fresh Installation
1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install all dependencies
4. Run `npm run dev` to start the development server

### Updating Dependencies
To update all dependencies to their latest compatible versions:
```bash
npm update
```

To check for outdated packages:
```bash
npm outdated
```

### Installing Individual Packages
If you need to install a specific package:
```bash
# Production dependency
npm install <package-name>

# Development dependency
npm install -D <package-name>
```

---

## Scripts Available

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

---

## Node.js Version
This project requires Node.js version 18.x or higher.

Check your Node.js version:
```bash
node --version
```

---

## Troubleshooting

### Common Issues

**Issue: `npm install` fails**
- Solution: Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

**Issue: Type errors in TypeScript**
- Solution: Ensure all `@types/*` packages are installed correctly

**Issue: Tailwind CSS not working**
- Solution: Verify `tailwind.config.ts` and `postcss.config.mjs` are properly configured

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

*Last Updated: November 2, 2025*
