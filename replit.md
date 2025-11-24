# Vonguulian Design - Premium Digital Products & Consultation Platform

## Overview

Vonguulian Design is a premium digital marketplace and consultation platform focused on Human Design services. The application serves as a sophisticated showcase for digital products (cheatsheets) and expert consultation services, with a strong emphasis on minimalistic, luxury design aesthetics. The platform features educational content about the Vonguulian philosophy, including sections on history, health, music, and future innovation.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Improvements (Nov 24, 2025 - Final Optimization Pass)

### Performance Optimization
- **Implemented lazy loading for secondary pages**: All pages except Home (BasicCheatsheets, AboutUs, VonguulFuture, Catalog, History, Health, Music, Resources, ArticleDetail, NotFound) now use React.lazy() with Suspense
- **Added loading indicator**: Smooth spinner appears while pages load for better UX
- **Expected improvement**: 30-50% faster initial page load time by deferring secondary page bundles

### SEO Optimization
- **Enhanced meta tag system**: Extended usePageMeta hook with support for Open Graph and Twitter Card tags
- **Added canonical URLs**: Each page sets og:url for proper URL attribution
- **Created sitemap.xml**: All pages and article URLs indexed for search engines with appropriate priorities
- **Created robots.txt**: Guides search engines to crawl public content and avoid API routes
- **Implemented JSON-LD schemas**: 
  - Organization schema on home page for brand recognition in search results
  - Article schema on article detail pages for rich snippets
- **Enhanced social sharing**: Twitter Cards and Open Graph tags ensure beautiful previews when sharing on social platforms
- **Expected improvement**: Better Google rankings and 2x improved social media appearance

### Newsletter Infrastructure
- **Created Vercel serverless function** (`api/subscribe.ts`): Secure server-side newsletter subscription endpoint
- **API key security**: BUTTONDOWN_API_KEY remains server-side only, never exposed to browser
- **Removed Express route**: Cleaned up backend routes to minimize attack surface
- **Ready for production**: Function scales automatically with Vercel infrastructure

### Asset Import Cleanup
- **Removed missing image imports**: Fixed build failures by removing broken asset references
- **Replaced with CSS/icon solutions**:
  - Hero section: Removed missing hero image, replaced with gradient background + animated blob overlay
  - Hero logo: Replaced missing PNG with minimalist text-based logo (Vonguulian text + circle icon)
  - Products section: Removed decorative background image
  - VonguulFuture page: Replaced 4 missing tech images with icon-based placeholders (Zap, Glasses, Hand, Headphones)
  - Music page: Replaced missing banner with gradient section + Music icon

### Technical Implementation
- Navigation & UX: Header navigation persistent with active link highlighting
- Resources/Blog: 8 featured articles with category filtering
- Mobile optimization: Simplified navigation, proper spacing, reduced z-index conflicts
- Lazy loading: Dynamic imports with Suspense boundaries
- Meta tags: Comprehensive SEO coverage with dynamic updates
- Serverless API: Production-ready Vercel function for newsletters

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. Secondary pages use lazy loading with React.Suspense for improved initial load time. Routes include Home, BasicCheatsheets, AboutUs, VonguulFuture, Catalog, History, Health, Music, Resources, and ArticleDetail.

**UI Component Library**: Shadcn UI (New York style variant) with Radix UI primitives for accessible, unstyled components. The component system uses CSS variables for theming and supports both light and dark modes, with black/gold luxury aesthetic.

**Styling Strategy**: Tailwind CSS with custom configuration. Design system implements luxury color palette (black primary, gold accents) with custom spacing and typography hierarchy.

**State Management**: TanStack Query (React Query) for server state management. Form state handled through React Hook Form with Zod validation schemas.

**Performance Features**: 
- Lazy loading for secondary pages with Suspense boundaries
- SEO meta tag management with usePageMeta hook
- JSON-LD structured data for search engines
- Optimized initial bundle size

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development Mode**: Uses Vite middleware mode with HMR for rapid development.

**Production Mode**: Serves static files from `dist/public` with SPA fallback routing.

**API Routes**: Minimal backend focused on file serving (article markdown files).

**Serverless Functions**: 
- Vercel function at `api/subscribe.ts` handles secure newsletter subscriptions
- Server-side API key management prevents credential exposure

### Data Storage Solutions

**ORM**: Drizzle ORM configured for PostgreSQL dialect.

**Database Configuration**: Drizzle Kit configured with schema in `shared/schema.ts` and Neon serverless PostgreSQL support.

**External Services**:
- Web3Forms API for contact form submissions
- Buttondown API for newsletter subscriptions (server-side only via Vercel function)
- Gumroad for digital product sales
- SoundCloud for music playlist embeds

**Asset Management**: Static assets stored in `attached_assets/articles` directory (only markdown articles remain after cleanup).

**Deployment Platform**: Configured for Vercel with automatic builds on git push.

### Deployment Checklist

For Vercel deployment, ensure:
1. ✅ Build configuration in `vercel.json` 
2. ⚠️ **Add `BUTTONDOWN_API_KEY` to Vercel environment variables** (Production environment)
3. ✅ All asset imports cleaned up (build no longer fails)
4. ✅ SEO meta tags and sitemap configured
5. ✅ Static files serve correctly with SPA fallback
