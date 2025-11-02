# Credo Migration Services Ltd

> Professional immigration advisory website for New Zealand and Australia visa services

[![Next.js](https://img.shields.io/badge/Next.js-14.2.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration Files](#configuration-files)
- [Styling System](#styling-system)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)
- [License](#license)

---

## 🌟 Overview

**Credo Migration Services Ltd** is a professional immigration advisory website designed to provide comprehensive visa and migration services for New Zealand and Australia. The platform serves as a digital presence for licensed immigration advisers (IAA for New Zealand, MARA for Australia) to connect with clients seeking skilled migration, work visas, family reunification, student visas, and investor pathways.

### Key Objectives:
- Provide clear information about immigration services
- Showcase professional credentials and licensing
- Offer easy navigation for different visa categories
- Enable client contact and consultation booking
- Build trust through professional design and content

---

## ✨ Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Modern UI/UX**: Clean, professional interface using Tailwind CSS
- **SEO Optimized**: Built-in metadata and SEO best practices with Next.js
- **Fast Performance**: Server-side rendering and static generation for optimal speed
- **Type Safety**: Full TypeScript implementation for robust code
- **Component-Based**: Reusable React components for maintainability
- **Sticky Navigation**: Easy access to navigation throughout the site
- **Mobile Menu**: Hamburger menu for mobile devices
- **Custom Color Scheme**: Professional blue and purple color palette
- **Social Media Integration**: Footer links to social platforms

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 14.2.0** - React framework with server-side rendering, routing, and optimization
- **React 18.3.0** - JavaScript library for building user interfaces
- **React DOM 18.3.0** - React package for DOM manipulation

### Language
- **TypeScript 5.0.0** - Statically typed superset of JavaScript

### Styling
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **PostCSS 8.4.0** - CSS transformation tool
- **Autoprefixer 10.4.0** - Automatic vendor prefix addition

### Development Tools
- **ESLint** - Code linting with Next.js core web vitals configuration
- **@types/node** - TypeScript definitions for Node.js
- **@types/react** - TypeScript definitions for React
- **@types/react-dom** - TypeScript definitions for React DOM

### Font
- **Inter** - Google Font for clean, modern typography

---

## 📁 Project Structure

```
/vercel/sandbox/
│
├── app/                          # Next.js App Router directory
│   ├── globals.css              # Global styles and Tailwind directives
│   └── layout.tsx               # Root layout component with metadata
│
├── components/                   # Reusable React components
│   ├── Footer.tsx               # Footer component with links and info
│   └── Navigation.tsx           # Header navigation with mobile menu
│
├── node_modules/                # Installed dependencies (auto-generated)
│
├── .git/                        # Git version control directory
│
├── .eslintrc.json              # ESLint configuration
├── DEPENDENCIES.md             # Detailed dependency documentation
├── next.config.ts              # Next.js configuration
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Locked dependency versions
├── postcss.config.mjs          # PostCSS configuration for Tailwind
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript compiler configuration
```

---

## 📄 File Descriptions

### Root Configuration Files

#### `package.json`
- **Purpose**: Defines project metadata, dependencies, and npm scripts
- **Key Contents**:
  - Project name: `credo-migration-services`
  - Version: `1.0.0`
  - Production dependencies: Next.js, React, React DOM
  - Development dependencies: TypeScript, Tailwind CSS, type definitions
  - Scripts for development, building, and linting

#### `tsconfig.json`
- **Purpose**: TypeScript compiler configuration
- **Key Settings**:
  - Target: ES2017
  - Strict mode enabled for type safety
  - Module resolution: bundler
  - Path aliases: `@/*` maps to project root
  - JSX preservation for Next.js
  - Includes all `.ts` and `.tsx` files

#### `next.config.ts`
- **Purpose**: Next.js framework configuration
- **Current State**: Minimal configuration (ready for customization)
- **Potential Additions**: Image domains, redirects, headers, environment variables

#### `tailwind.config.ts`
- **Purpose**: Tailwind CSS configuration
- **Key Features**:
  - Content paths for component scanning
  - Custom color palette:
    - **Primary**: Blue shades (50-900) for main brand color
    - **Secondary**: Purple shades (50-900) for accents
  - Extensible theme system

#### `postcss.config.mjs`
- **Purpose**: PostCSS configuration for CSS processing
- **Plugins**:
  - `tailwindcss`: Processes Tailwind directives
  - `autoprefixer`: Adds vendor prefixes automatically

#### `.eslintrc.json`
- **Purpose**: ESLint configuration for code quality
- **Configuration**: Extends Next.js core web vitals rules

#### `DEPENDENCIES.md`
- **Purpose**: Comprehensive documentation of all project dependencies
- **Contents**: Installation instructions, troubleshooting, and package descriptions

---

### Application Files

#### `app/layout.tsx`
- **Purpose**: Root layout component that wraps all pages
- **Key Features**:
  - Imports Inter font from Google Fonts
  - Defines site-wide metadata (title, description, keywords)
  - Includes Navigation and Footer components
  - Applies global styles
- **Metadata**:
  - Title: "Credo Migration Services Ltd | Licensed Immigration Advisers for NZ & Australia"
  - Description: Professional immigration advisory services
  - Keywords: Immigration, visa services, licensed advisers

#### `app/globals.css`
- **Purpose**: Global stylesheet with Tailwind directives and custom utilities
- **Key Contents**:
  - Tailwind base, components, and utilities layers
  - Custom component classes:
    - `.container-custom`: Responsive container with max-width
    - `.btn-primary`: Primary button styling
    - `.btn-secondary`: Secondary button styling
    - `.section-padding`: Consistent section spacing
    - `.heading-xl`, `.heading-lg`, `.heading-md`, `.heading-sm`: Typography utilities
  - Base body styles

---

### Component Files

#### `components/Navigation.tsx`
- **Purpose**: Main navigation header component
- **Type**: Client component (`"use client"`)
- **Key Features**:
  - Sticky header with shadow
  - Logo with "CM" branding
  - Desktop navigation menu with dropdown for services
  - Mobile hamburger menu with toggle functionality
  - Links to: Home, Services (NZ/Australia), About, Process, Fees, Blog, Contact
  - Responsive design (hidden/visible at `lg` breakpoint)
- **State Management**: Uses `useState` for mobile menu toggle
- **Styling**: Tailwind CSS with hover effects and transitions

#### `components/Footer.tsx`
- **Purpose**: Site footer with links and information
- **Type**: Server component (default)
- **Key Features**:
  - Four-column grid layout (responsive)
  - Company branding and description
  - Social media icons (Facebook, Twitter, LinkedIn)
  - Service links (NZ/Australia immigration categories)
  - Company links (About, Process, Fees, Blog, Contact)
  - Legal links (Privacy, Terms, Disclaimer)
  - Licensing information (IAA, MARA)
  - Copyright notice with dynamic year
- **Styling**: Dark theme (gray-900 background) with hover effects

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd vercel/sandbox
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

### Development
```bash
npm run dev
```
- Starts the Next.js development server
- Enables hot module replacement
- Runs on `http://localhost:3000`

### Production Build
```bash
npm run build
```
- Creates an optimized production build
- Generates static pages and server-side code
- Required before deployment

### Production Server
```bash
npm start
```
- Starts the production server
- Must run `npm run build` first
- Serves the optimized build

### Linting
```bash
npm run lint
```
- Runs ESLint to check code quality
- Follows Next.js core web vitals rules
- Identifies potential errors and style issues

---

## ⚙️ Configuration Files

### TypeScript Configuration

The `tsconfig.json` file is configured for optimal Next.js development:

- **Strict Mode**: Enabled for maximum type safety
- **Path Aliases**: `@/*` maps to the project root for cleaner imports
- **JSX**: Preserved for Next.js to handle
- **Module Resolution**: Uses bundler mode for modern tooling
- **Incremental Compilation**: Faster subsequent builds

### Next.js Configuration

The `next.config.ts` file is minimal but can be extended with:

- **Image Optimization**: Configure remote image domains
- **Redirects**: Set up URL redirects
- **Headers**: Add custom HTTP headers
- **Environment Variables**: Define public and server-side variables
- **Internationalization**: Add multi-language support

### Tailwind Configuration

Custom theme extensions in `tailwind.config.ts`:

**Primary Colors (Blue)**:
- 50: `#f0f9ff` (lightest)
- 600: `#0284c7` (main brand color)
- 900: `#0c4a6e` (darkest)

**Secondary Colors (Purple)**:
- 50: `#fdf4ff` (lightest)
- 600: `#c026d3` (accent color)
- 900: `#701a75` (darkest)

---

## 🎨 Styling System

### Tailwind Utility Classes

The project uses Tailwind's utility-first approach for styling. Common patterns:

- **Spacing**: `p-4`, `m-8`, `space-x-4`
- **Colors**: `bg-primary-600`, `text-gray-900`
- **Typography**: `text-xl`, `font-bold`
- **Layout**: `flex`, `grid`, `container-custom`
- **Responsive**: `md:text-4xl`, `lg:flex`

### Custom Component Classes

Defined in `globals.css` for reusability:

```css
.container-custom     /* Responsive container */
.btn-primary          /* Primary button */
.btn-secondary        /* Secondary button */
.section-padding      /* Section spacing */
.heading-xl           /* Extra large heading */
.heading-lg           /* Large heading */
.heading-md           /* Medium heading */
.heading-sm           /* Small heading */
```

### Color Palette

**Primary (Blue)**: Professional, trustworthy
- Used for: Buttons, links, branding

**Secondary (Purple)**: Accent, modern
- Used for: Highlights, secondary elements

**Gray Scale**: Content, backgrounds
- Used for: Text, borders, backgrounds

---

## 💻 Development Guidelines

### Component Structure

- **Server Components**: Default for static content (e.g., Footer)
- **Client Components**: Use `"use client"` for interactivity (e.g., Navigation)
- **File Naming**: PascalCase for components (e.g., `Navigation.tsx`)
- **Organization**: Keep components in `/components` directory

### Styling Best Practices

- **Utility-First**: Use Tailwind utilities directly in JSX
- **Custom Classes**: Create reusable classes in `globals.css` for repeated patterns
- **Responsive Design**: Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
- **Consistency**: Use custom component classes for uniform styling

### TypeScript Usage

- **Type Safety**: Define interfaces for props and state
- **Strict Mode**: Enabled for catching potential errors
- **Type Imports**: Use `import type` for type-only imports
- **No Any**: Avoid `any` type; use specific types or `unknown`

### Code Quality

- **ESLint**: Run `npm run lint` before committing
- **Formatting**: Consistent indentation and spacing
- **Comments**: Add comments for complex logic
- **Naming**: Descriptive variable and function names

---

## 🚢 Deployment

### Vercel (Recommended)

Next.js is built by Vercel and deploys seamlessly:

1. **Push to Git**: Commit and push your code to GitHub/GitLab/Bitbucket
2. **Import to Vercel**: Connect your repository at [vercel.com](https://vercel.com)
3. **Configure**: Vercel auto-detects Next.js settings
4. **Deploy**: Automatic deployments on every push

### Other Platforms

- **Netlify**: Supports Next.js with build plugins
- **AWS Amplify**: Full-stack deployment with AWS services
- **Docker**: Containerize with Next.js standalone output
- **Self-Hosted**: Use `npm run build` and `npm start` on your server

### Build Output

```bash
npm run build
```

Creates:
- `.next/` directory with optimized code
- Static assets in `.next/static/`
- Server-side code in `.next/server/`

---

## 📝 License

This project is proprietary software for Credo Migration Services Ltd.

**Copyright © 2025 Credo Migration Services Ltd. All rights reserved.**

---

## 📞 Contact & Support

For questions or support regarding this project:

- **Website**: [Contact Page](#)
- **Email**: info@credomigration.com (example)
- **Licensed**: IAA (New Zealand) | MARA (Australia)

---

## 🔄 Version History

- **v1.0.0** (Current) - Initial release with core features
  - Next.js 14 setup
  - Responsive navigation and footer
  - Tailwind CSS styling system
  - TypeScript configuration
  - SEO optimization

---

## 🙏 Acknowledgments

- **Next.js Team**: For the excellent React framework
- **Vercel**: For hosting and deployment platform
- **Tailwind Labs**: For the utility-first CSS framework
- **React Team**: For the foundational UI library

---

**Built with ❤️ for professional immigration services**
