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

### Filtering System - ✅ IMPLEMENTED

**Status**: Client-side filtering has been implemented for Magazine, Restaurants, and Trails pages.

**How it Works**:
- All content is rendered on the page with data attributes
- JavaScript reads URL query parameters and filters displayed items
- Filter counts update dynamically
- Works in static build mode

**Implementation Details**:
- Magazine: Filters by category ID and tags
- Restaurants: Filters by category ID, attributes, price range, and rating
- Trails: Filters by difficulty and distance ranges

**Testing**: To verify filters are working, navigate to:
- `/magazine?cat=gastronomie` - Should show only Gastronomie articles
- `/magazine?tag=culture` - Should show articles tagged with "culture"
- `/restaurants?attr=Terrasse` - Should show restaurants with terrasse
- `/sentiers?difficulty=facile` - Should show easy trails

**Note**: Filtering requires JavaScript enabled in the browser.

### Missing Images

Many content items reference images in `/images/` directory that don't exist yet. This results in 404 errors but doesn't affect functionality. Add actual images to:
- `/public/images/articles/`
- `/public/images/restaurants/`
- `/public/images/accommodations/`
- `/public/images/activities/`
- `/public/images/trails/`
- `/public/images/events/`

## 🔄 Recent Changes

### Client-Side Filtering Implementation ✅
- Implemented JavaScript-based filtering for Magazine, Restaurants, and Trails pages
- Added data attributes to all filterable items (category-id, tags, attributes, etc.)
- Created filter scripts that read URL parameters and hide/show items dynamically
- Updated result counts to reflect filtered totals
- Filter links work correctly and update URL parameters
- All filters maintain active states based on current URL

### Filter Logic Improvements
- Updated category matching to compare IDs correctly  
- Fixed restaurant category slug vs ID mismatch
- Improved trail difficulty and distance filtering logic
- Changed trail distance parsing from `parseInt` to `parseFloat` for accuracy

## 📚 Documentation

### 📋 Current Project Status (Start Here!)

**New contributors and stakeholders should start with these comprehensive audit documents:**

- **[RESUME.md](./RESUME.md)** - 📋 **Complete audit in French** (1,349 lines, 35KB)
  - Full detailed analysis for French-speaking team members
  - Complete inventory of all pages, components, translations, and content
  - Comprehensive analysis of what exists and what's missing
  - Prioritized recommendations and roadmap
  
- **[RESUME_EN.md](./RESUME_EN.md)** - 📋 **Executive summary in English** (321 lines, 8.3KB)
  - Quick overview for international contributors
  - Key metrics and critical gaps
  - Priority recommendations and getting started guide
  - Links to full French document for details

**👉 Choose RESUME.md for complete details in French, or RESUME_EN.md for a quick English overview.**

- **[TASKS.md](./TASKS.md)** - ✅ **Detailed task list** (1,364 lines, 37KB)
  - 1,100+ detailed frontend tasks organized in 10 sections
  - Focus on translations, components, pages, content, and optimizations
  - Timeline: 9-13 weeks of frontend work
  - Database/Auth intentionally excluded (will come after frontend completion)

### 📜 Migration History (Legacy)

For historical context about the migration from React to Astro:
- `MIGRATION_SUMMARY.md` - React to Astro migration details
- `CONTENT_ENHANCEMENT_SUMMARY.md` - Content collections setup
- `ASTRO_MIGRATION.md` - Technical migration notes
- Other `*_SUMMARY.md` files - Various implementation details

**Note**: These legacy files will be archived in the next cleanup to focus on current documentation.

## 🎯 Next Steps

### Priority 1: Content
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
