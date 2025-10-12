# Salut Annecy - City Guide

A comprehensive city guide website for Annecy built with Astro, featuring multilingual support and a rich content management system.

## 🌟 Project Overview

Salut Annecy is a static site built with Astro that provides information about restaurants, accommodations, activities, trails, events, and articles about Annecy and its surroundings.

### Key Features

- ✅ **Multilingual Support**: 6 languages (French, English, German, Spanish, Arabic, Chinese)
- ✅ **Content Collections**: Structured content management for all types of listings
- ✅ **Responsive Design**: Mobile-first approach with modern CSS
- ✅ **SEO Optimized**: Meta tags, sitemaps, and semantic HTML
- ✅ **Accessibility**: WCAG compliant with proper ARIA labels
- ✅ **Performance**: Static site generation for fast loading
- ⚠️ **Filtering**: Client-side filtering needed (see Known Issues)

## 📦 Tech Stack

- **Framework**: Astro 5.14.4
- **Language**: TypeScript
- **Styling**: Pure CSS (no libraries)
- **Content**: JSON + Markdown
- **Deployment**: Static site (GitHub Pages/Netlify compatible)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:4321/`

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Button, Icon
│   ├── molecules/       # Card
│   └── organisms/       # Header, Footer
├── content/             # Content collections
│   ├── articles/        # Blog articles (Markdown)
│   ├── articleCategories/
│   ├── restaurants/     # Restaurant listings (JSON)
│   ├── restaurantCategories/
│   ├── accommodations/  # Accommodation listings
│   ├── accommodationCategories/
│   ├── activities/      # Activity listings
│   ├── activityCategories/
│   ├── trails/          # Hiking trails
│   ├── trailCategories/
│   ├── events/          # Events and happenings
│   ├── services/        # Local services
│   ├── serviceCategories/
│   ├── listings/        # Classified ads
│   └── places/          # Generic places (legacy)
├── i18n/
│   ├── locales/         # Translation files (fr, en, de, es, ar, zh)
│   └── index.ts         # i18n utilities
├── layouts/
│   ├── BaseLayout.astro
│   └── MainLayout.astro
├── pages/               # Route pages
│   ├── index.astro
│   ├── magazine/        # Articles section
│   ├── restaurants/     # Restaurants section
│   ├── hebergements/    # Accommodations section
│   ├── activites/       # Activities section
│   ├── sentiers/        # Trails section
│   ├── agenda.astro     # Events calendar
│   ├── place/[slug].astro
│   ├── event/[slug].astro
│   └── trail/[slug].astro
└── styles/
    ├── tokens.css       # Design tokens
    └── global.css       # Global styles
```

## 🎨 Design System

The project uses a custom design system with:
- **Design Tokens**: Colors, typography, spacing defined in `tokens.css`
- **Themes**: Light, dark, and high contrast modes
- **Components**: Atomic design pattern (Atoms → Molecules → Organisms)
- **Responsive**: Mobile-first with breakpoints at 640px, 768px, 1024px, 1280px

## 🌍 Internationalization (i18n)

### Supported Languages

- 🇫🇷 French (default)
- 🇬🇧 English
- 🇩🇪 German
- 🇪🇸 Spanish
- 🇸🇦 Arabic (RTL support)
- 🇨🇳 Chinese

### Adding Translations

1. Add translations to `src/i18n/locales/{lang}.json`
2. Use the `t()` function in components:

```astro
---
import { useTranslations, getLangFromUrl } from '../i18n';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h1>{t('header.title')}</h1>
```

## 📝 Content Management

### Adding Content

#### Restaurant

Create `src/content/restaurants/my-restaurant.json`:

```json
{
  "id": "my-restaurant",
  "name": "My Restaurant",
  "description": "A great place to eat",
  "categoryId": "cuisine-locale",
  "address": "123 Main St, Annecy",
  "phone": "+33 4 50 XX XX XX",
  "website": "https://example.com",
  "imageUrl": "/images/restaurants/my-restaurant.jpg",
  "rating": 4.5,
  "reviewCount": 100,
  "coordinates": { "lat": 45.8992, "lng": 6.1294 },
  "attributes": ["Terrasse", "Parking"],
  "hours": "12h-14h, 19h-22h",
  "priceRange": "€€",
  "published": true
}
```

#### Article

Create `src/content/articles/my-article.md`:

```markdown
---
id: "my-article"
title: "My Article Title"
excerpt: "Brief description"
imageUrl: "/images/articles/my-article.jpg"
category: "Gastronomie"
categoryId: "gastronomie"
authorId: "author-1"
date: "2025-01-15T10:00:00"
readTime: "5 min"
tags: ["food", "local"]
published: true
---

# Article Content

Your markdown content here...
```

### Content Collections

All content is managed through Astro Content Collections defined in `src/content/config.ts`. Collections include:

- `articles` - Blog posts and guides
- `articleCategories` - Article categorization
- `restaurants` - Restaurant listings
- `restaurantCategories` - Restaurant types
- `accommodations` - Hotels, camping, etc.
- `accommodationCategories` - Accommodation types
- `activities` - Things to do
- `activityCategories` - Activity types
- `trails` - Hiking and biking trails
- `trailCategories` - Difficulty levels
- `events` - Upcoming events
- `services` - Local services
- `serviceCategories` - Service types
- `listings` - Classified ads

## ✅ What Works

### Navigation
- ✅ All main navigation links work correctly
- ✅ Dropdown menus for Restaurants, Accommodations, and Activities
- ✅ Footer links to legal pages, support, and professional sections
- ✅ Breadcrumb navigation
- ✅ Language selector
- ✅ Theme toggle (light/dark/contrast)

### Pages
- ✅ Homepage with featured content
- ✅ Restaurant listing and detail pages
- ✅ Accommodation listing and detail pages
- ✅ Activity listing and detail pages
- ✅ Magazine/blog section
- ✅ Trails section
- ✅ Events calendar
- ✅ Individual place/event/trail detail pages

### Content
- ✅ 7 restaurant entries
- ✅ 4 accommodation entries
- ✅ 4 activity entries
- ✅ 4 service entries
- ✅ 4 article entries
- ✅ 4 trail entries
- ✅ 4 event entries
- ✅ Categories for all content types

### Build & Development
- ✅ Project builds successfully
- ✅ No build errors or warnings
- ✅ Development server works
- ✅ All routes generate correctly (70 pages)

## ⚠️ Known Issues

### Filtering System

**Issue**: The filtering system on Magazine, Restaurants, and Trails pages does not work in the current static build mode.

**Root Cause**: The site uses `output: 'static'` mode in Astro, which pre-renders all pages at build time without query parameters. The filter links use URL query parameters (e.g., `/magazine?cat=gastronomie`), but Astro's static mode doesn't re-render pages for different query parameter combinations.

**Current State**:
- Filter links appear and update the URL correctly
- Active states on filters are applied based on URL params
- However, the content is not actually filtered - all items are shown

**Solutions** (choose one):

1. **Server-Side Rendering (Recommended for dynamic filtering)**:
   - Change `output: 'static'` to `output: 'hybrid'` in `astro.config.mjs`
   - Add an adapter (e.g., `@astrojs/node`, `@astrojs/vercel`)
   - Mark filter pages with `export const prerender = false`
   - Deploy to a platform that supports SSR

2. **Client-Side Filtering (Recommended for static deployment)**:
   - Keep `output: 'static'`
   - Implement JavaScript to filter displayed items based on URL params
   - Add data attributes to cards for filtering
   - Use `URLSearchParams` to read filters and hide/show items

3. **Pre-generate All Filter Combinations** (Complex):
   - Use `getStaticPaths` to generate pages for all filter combinations
   - Create routes like `/magazine/category/[slug]`, `/magazine/tag/[tag]`
   - Requires restructuring URL patterns

**Affected Pages**:
- `/magazine` - Article category and tag filters
- `/restaurants` - Category, attribute, price, and rating filters
- `/sentiers` - Difficulty and distance filters
- `/activites`, `/hebergements`, `/services` - Category filters

**Workaround**: Users can still access all content by browsing the unfiltered lists or using search (when implemented).

### Missing Images

Many content items reference images in `/images/` directory that don't exist yet. This results in 404 errors but doesn't affect functionality. Add actual images to:
- `/public/images/articles/`
- `/public/images/restaurants/`
- `/public/images/accommodations/`
- `/public/images/activities/`
- `/public/images/trails/`
- `/public/images/events/`

## 🔄 Recent Changes

### Filter Logic Improvements (Attempted)
- Updated category matching to compare IDs correctly
- Fixed restaurant category slug vs ID mismatch
- Improved trail difficulty and distance filtering logic
- Changed trail distance parsing from `parseInt` to `parseFloat`

**Note**: These improvements are functionally correct but don't take effect in static mode without one of the solutions listed above.

## 📚 Additional Documentation

For historical context and detailed migration information, see:
- `MIGRATION_SUMMARY.md` - React to Astro migration details
- `CONTENT_ENHANCEMENT_SUMMARY.md` - Content collections setup
- `ASTRO_MIGRATION.md` - Technical migration notes
- Other `*_SUMMARY.md` files - Various implementation details

**Note**: These files will be removed in the next cleanup to keep documentation focused on the current state.

## 🎯 Next Steps

### Priority 1: Fix Filtering
Choose and implement one of the filtering solutions (see Known Issues section above).

### Priority 2: Content
- Add real images for all content items
- Add more restaurants, accommodations, activities
- Write more articles
- Add more events and trails

### Priority 3: Features
- Implement search functionality
- Add user authentication
- Add favorites/bookmarks
- Add review system
- Add map integration with coordinates

### Priority 4: Optimization
- Optimize images (use Astro Image component)
- Add pagination for long lists
- Implement infinite scroll
- Add loading states
- Improve SEO metadata

## 🤝 Contributing

This is a private project. If you have access and want to contribute:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Private project - All rights reserved.

## 🙋 Support

For questions or issues, please contact the project maintainer.

---

**Last Updated**: October 2025
**Version**: 1.0.0
**Status**: Active Development
