# Vonguulian Design - Premium Digital Products & Consultation Platform

## Overview

Vonguulian Design is a premium digital marketplace and consultation platform focused on Human Design services. The application serves as a sophisticated showcase for digital products (cheatsheets) and expert consultation services, with a strong emphasis on minimalistic, luxury design aesthetics. The platform features educational content about the Vonguulian philosophy, including sections on history, health, music, and future innovation.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Improvements (Nov 24, 2025)

### Vercel Serverless Functions & Backend Optimization
- **Created Vercel serverless functions**: Implemented `/api/subscribe.ts` as a Vercel Edge Function to handle newsletter subscriptions securely without exposing API keys to the browser.
- **Updated routing configuration**: Modified `vercel.json` to properly route `/api/*` requests to serverless functions while maintaining SPA routing for all other paths.
- **Installed @vercel/node**: Added package for Vercel serverless function type definitions.
- **Newsletter security improved**: API key (`BUTTONDOWN_API_KEY`) now only stored on Vercel server-side environment, never exposed client-side.

### SEO & Search Engine Optimization
- **Comprehensive meta tags**: Updated `index.html` with Open Graph tags, canonical URLs, preconnect directives, and font optimization for improved social sharing and search visibility.
- **Structured data (JSON-LD)**: Added organization schema to index.html and implemented article-level structured data in ArticleDetail component for rich search results.
- **Sitemap & Robots.txt**: Created `sitemap.xml` with priority levels for all main pages and `robots.txt` for search engine crawling guidance.
- **Dynamic article meta tags**: Articles now update Open Graph tags (og:title, og:description, og:url) based on article content for proper social media previews.
- **Utilities for SEO**: Created `lib/structuredData.ts` with reusable schema templates for organization, articles, and services.

### Performance & Accessibility Improvements
- **Lazy loading on images**: Added `loading="lazy"` attribute to logo and decorative images to defer offscreen image loading.
- **Enhanced image alt text**: Improved descriptive alt text for all images (e.g., "Vonguulian Design Logo" instead of just "Vonguulian").
- **Decorative image accessibility**: Added `aria-hidden="true"` to purely decorative images and proper test IDs for accessibility testing.
- **Resource hints**: Added preconnect and dns-prefetch directives in HTML head for faster third-party API connections (Google Fonts, Buttondown, Web3Forms).

### Navigation & UX Enhancements
- **Added persistent Header navigation**: Created `Header.tsx` component displaying main navigation links (Home, Products, Resources, Consultation, Future, History, Health) with active link highlighting. Media page remains intentionally hidden and only accessible via easter egg link on Future page.
- **Improved mobile navigation**: Simplified mobile menu shows only Home and Products links to reduce visual clutter on smaller screens.
- **Removed jarring auto-scroll behavior**: Eliminated `window.scrollTo(0, 0)` from all pages to provide smoother back-button navigation experience.
- **Fixed bottom navigation mobile positioning**: Adjusted bottom floating action buttons with better padding and z-index management.

### Resources/Blog Section
- **Created Resources page**: New dedicated section for Human Design educational content with 8 featured articles covering types, strategies, profiles, authority, and relationships.
- **Category-based organization**: Articles organized by categories with filtering interface.
- **Rich article cards**: Each article displays title, excerpt, read time, tags, and category badge.
- **Call-to-action integration**: Direct links to consultation booking from Resources section.
- **Fully responsive design**: Optimized for desktop and mobile.
- **Hidden discovery link**: Resources accessible via "guidance" link in ConsultationSection.

### Technical Implementation
- Articles served as static files from `/client/public/articles/` for Vercel compatibility
- Dynamic article loading via `fetch('/articles/:slug.md')` from frontend
- Link component with proper `asChild` prop for navigation
- ConsultationSection uses Link for "guidance" text with underline and hover color
- All routes properly configured for client-side routing on Vercel

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application follows a simple page-based architecture with routes for Home, BasicCheatsheets, AboutUs, VonguulFuture, Catalog, History, Health, Music, Resources, and ArticleDetail.

**UI Component Library**: Shadcn UI (New York style variant) with Radix UI primitives for accessible, unstyled components. The component system uses CSS variables for theming and supports both light and dark modes.

**Styling Strategy**: Tailwind CSS with custom configuration. Design system implements a luxury color palette (black primary, gold accents) with custom spacing, typography (Playfair Display for headings, Inter for body text), and shadow/elevation utilities.

**State Management**: TanStack Query (React Query) for server state management. Form state handled through React Hook Form with Zod validation schemas.

**Design System**: Component-based architecture with reusable UI primitives (Button, Card, Form, Input, etc.) following the shadcn/ui pattern.

**SEO & Performance**: 
- Dynamic meta tag management in components
- Structured data (JSON-LD) for search engines
- Lazy loading on images
- Resource hints for third-party APIs
- Sitemap and robots.txt for search indexing

### Backend Architecture

**Production Deployment**: Vercel serverless functions for backend APIs. Static site generation for all frontend assets.

**Development Mode**: Express.js with TypeScript, Vite middleware mode with HMR. Includes Replit-specific plugins.

**Production Mode**: Vercel handles routing with rewrites for `/api/*` to serverless functions and SPA fallback for all other routes.

**API Endpoints**:
- `POST /api/subscribe` - Newsletter subscription (Vercel serverless function)
- `/articles/:slug.md` - Article markdown files (static files served from `/public/articles/`)

### Data Storage Solutions

**Newsletter Integration**: Buttondown API for email list management. API key stored securely in Vercel environment variables.

**Form Submissions**: Web3Forms API for contact form processing. API key is client-side (acceptable for Web3Forms usage pattern).

**Article Storage**: Markdown files stored in `client/public/articles/` for static serving on Vercel. Article metadata managed in `shared/articles.ts`.

### External Dependencies

**Email Services**: 
- Buttondown API for newsletter subscriptions (key stored in Vercel secrets)
- Web3Forms for contact form handling

**Social Media Integration**: Direct external links to YouTube, Instagram, Twitter/X, TikTok.

**Third-Party Services**: 
- Gumroad for digital product sales (cheatsheets)
- YouTube embeds for music playlist

**Asset Management**: Static assets in `attached_assets` directory with Vite alias `@assets`.

**Deployment Platform**: Vercel for frontend and serverless API functions. Automatic deployment from GitHub.

**Development Tools**: Replit-specific Vite plugins for enhanced development experience.

## Deployment Notes

- **Vercel Configuration**: `vercel.json` configured with rewrites for proper API routing and SPA fallback
- **Build Command**: `npm run build` generates static files in `dist/public` and serverless functions
- **Environment Variables**: `BUTTONDOWN_API_KEY` stored in Vercel production environment only (not exposed to browser)
- **Static File Serving**: Article markdown files and sitemap served directly from public directory
- **Automatic Redeployment**: GitHub integration enables automatic Vercel deployment on pushes to main branch
