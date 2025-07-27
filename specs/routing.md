# Routing and Page Structure

This document outlines the file-based routing structure of the application, which uses the Next.js App Router.

## Root Layout

- **File**: `src/app/layout.tsx`
- **Description**: This is the root layout for the entire application. It defines the main HTML structure, including the `<html>` and `<body>` tags, and wraps all pages.

## Pages

### Home Page

- **File**: `src/app/page.tsx`
- **Route**: `/`
- **Description**: This is the main landing page of the application.

### Resume (No Socials)

- **File**: `src/app/resume-no-socials/page.tsx`
- **Route**: `/resume-no-socials`
- **Description**: A specific version of the resume that does not include social media links.
