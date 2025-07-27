# Project Structure

This document outlines the directory structure of the `resume-nextjs` project.

- **`.git/`**: Contains Git version control information.
- **`.next/`**: The build output directory for the Next.js application. This is generated automatically.
- **`node_modules/`**: Contains all the project's dependencies (npm packages). Managed by npm or yarn.
- **`public/`**: Stores static assets like images, fonts, and other files that can be served directly by the browser.
- **`src/`**: The main source code directory for the application.
    - **`app/`**: Contains the core application logic, including pages and layouts, following the Next.js App Router convention.
    - **`components/`**: Reusable React components used throughout the application.
    - **`data/`**: Likely contains static data, such as JSON files or other data sources for the resume.
- **`.gitignore`**: Specifies files and directories that Git should ignore.
- **`next-env.d.ts`**: TypeScript declaration file for Next.js. Ensures TypeScript understands Next.js-specific types.
- **`next.config.mjs`**: Configuration file for Next.js.
- **`package.json`**: Defines project metadata, scripts, and dependencies.
- **`package-lock.json`**: Records the exact versions of dependencies.
- **`tsconfig.json`**: TypeScript configuration file for the project.
