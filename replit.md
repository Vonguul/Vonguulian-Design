# Vonguulian Design - Premium Digital Products & Consultation Platform

## Overview

Vonguulian Design is a premium digital marketplace and consultation platform focused on Human Design services. The application serves as a sophisticated showcase for digital products (cheatsheets) and expert consultation services, with a strong emphasis on minimalistic, luxury design aesthetics. The platform features educational content about the Vonguulian philosophy, including sections on history, health, music, and future innovation.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Improvements (Nov 24, 2025)

### Navigation & UX Enhancements
- **Added persistent Header navigation**: Created `Header.tsx` component displaying main navigation links (Home, Products, Resources, Consultation, Future, History, Health) with active link highlighting. Media page remains intentionally hidden and only accessible via easter egg link on Future page.
- **Improved mobile navigation**: Simplified mobile menu shows only Home and Products links to reduce visual clutter on smaller screens.
- **Removed jarring auto-scroll behavior**: Eliminated `window.scrollTo(0, 0)` from all pages (BasicCheatsheets, Music, AboutUs, History, Health) to provide smoother back-button navigation experience. Users no longer experience jarring jumps when transitioning between pages.
- **Fixed bottom navigation mobile positioning**: Adjusted bottom floating action buttons with better padding on mobile (bottom-4 right-4) and reduced z-index (40 instead of 50) to prevent overlap with content and header.

### Resources/Blog Section
- **Created Resources page**: New dedicated section for Human Design educational content with 8 featured articles/guides covering topics like types, strategies, profiles, authority, and relationships.
- **Category-based organization**: Articles organized by categories (Introduction, Types & Strategies, Advanced Concepts, Energy & Aura, Decision-Making, Relationships, Practical Tips) with category filtering interface.
- **Rich article cards**: Each article displays title, excerpt, read time, tags, and category badge for easy browsing and filtering.
- **Call-to-action integration**: Direct link to consultation booking from the Resources section to encourage user engagement.
- **Fully responsive design**: Resources page optimized for desktop and mobile with proper grid layout and navigation.

### Technical Implementation
- Header uses wouter Link component with proper `asChild` prop for navigation
- Navigation shows active state using dynamic variant prop on buttons
- All components properly structured to avoid nested interactive elements
- Media page remains hidden as intended - easter egg discovery maintained
- Resources page integrated into main routing with dedicated `/resources` path

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application follows a simple page-based architecture with routes for Home, BasicCheatsheets, AboutUs, VonguulFuture, Catalog, History, Health, Music, and a NotFound fallback.

**UI Component Library**: Shadcn UI (New York style variant) with Radix UI primitives for accessible, unstyled components. The component system uses CSS variables for theming and supports both light and dark modes, though the primary design emphasizes a black/gold luxury aesthetic.

**Styling Strategy**: Tailwind CSS with custom configuration extending the default theme. Design system implements a luxury color palette (black primary, gold accents) with custom spacing, typography hierarchy (Playfair Display for headings, Inter for body text), and shadow/elevation utilities.

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration. Form state handled through React Hook Form with Zod validation schemas.

**Design System**: Component-based architecture with reusable UI primitives (Button, Card, Form, Input, etc.) following the shadcn/ui pattern. Custom components for domain-specific features (ProductCard, ServiceCard, HeroSection, etc.).

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js. The architecture separates development and production server configurations.

**Development Mode**: Uses Vite middleware mode with HMR (Hot Module Replacement) for rapid development. Includes Replit-specific plugins for runtime error overlay, cartographer, and dev banner.

**Production Mode**: Serves pre-built static files from the `dist/public` directory with SPA fallback routing (all routes serve index.html for client-side routing).

**API Design**: Minimal backend with placeholder route registration. The current implementation uses a simple in-memory storage pattern, suggesting future database integration.

**Request Processing**: Express middleware configured for JSON parsing with raw body capture (for webhook verification scenarios). Custom logging middleware tracks request paths, durations, and response codes.

### Data Storage Solutions

**ORM**: Drizzle ORM configured for PostgreSQL dialect, though not fully implemented in the current codebase.

**Database Configuration**: Drizzle Kit configured to output migrations to `./migrations` directory with schema defined in `shared/schema.ts`. Database connection via `DATABASE_URL` environment variable, expecting Neon serverless PostgreSQL.

**Schema Design**: Zod-based validation schemas in `shared/schema.ts` for type-safe data validation. Currently implements contact form validation schema (fullName, email, serviceInterest, message).

**Session Management**: Connect-pg-simple package included for PostgreSQL-based session storage, though session implementation not yet active.

**Current State**: The application currently has database tooling configured but no active database tables or queries implemented. The schema file contains only validation schemas, not database table definitions.

### External Dependencies

**Email Service**: Web3Forms API integration for contact form submissions (API key: d85adb9d-78ef-4f4b-8793-ddc0c1634515). Form submissions sent via POST to `https://api.web3forms.com/submit`.

**Database Provider**: Configured for Neon serverless PostgreSQL (`@neondatabase/serverless` package), though connection not actively used.

**Social Media Integration**: Direct external links to social platforms (YouTube, Instagram, Twitter/X, TikTok) for brand presence. No OAuth or social login implemented.

**Third-Party Services**: 
- VitalChek integration (https://www.vitalchek.com/) for birth certificate/vital records access
- Gumroad links for digital product sales (https://vonguulian.gumroad.com/)
- YouTube embed for music playlist playback

**Asset Management**: Static assets stored in `attached_assets` directory, including images, logos, and content markdown files. Vite configured with alias `@assets` for asset imports.

**Font Services**: Google Fonts CDN for typography (Inter and Cormorant Garamond font families).

**Deployment Platform**: Configured for Vercel deployment with custom build command and SPA routing configuration in `vercel.json`.

**Development Tools**: Replit-specific Vite plugins for enhanced development experience in Replit environment (runtime error modal, cartographer, dev banner).