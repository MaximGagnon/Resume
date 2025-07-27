# Styling

This document describes the styling strategy for the project.

## Global Styles

- **File**: `public/style.css`
- **Description**: A global stylesheet is applied to the entire application. It is imported directly into the root layout (`src/app/layout.tsx`) and contains base styles, resets, and utility classes that affect the overall look and feel.

## Component-Level Styles

- **Strategy**: The project uses a co-located styling approach, where individual components have their own dedicated CSS files.
- **Example**: 
    - `src/components/Navigation.tsx` imports `src/components/Navigation.css`.
    - `src/components/MathematicalMosaic.tsx` imports `src/components/MathematicalMosaic.css`.
- **Description**: This method encapsulates styles, making components more modular and preventing style conflicts. Styles defined in a component's CSS file are intended to affect only that component.

## Fonts

- **Provider**: Google Fonts
- **Font**: `Inter`
- **Implementation**: The `Inter` font is loaded via the `next/font/google` package in `src/app/layout.tsx` and applied to the `<body>` tag. This is the recommended Next.js approach for optimizing web fonts.
