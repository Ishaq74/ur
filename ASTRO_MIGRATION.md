# Salut Annecy - Astro Migration

This project has been migrated from React/Vite to Astro with TypeScript, focusing on performance, SEO, and accessibility.

## 🚀 Stack

- **Framework**: Astro (static site generation)
- **Language**: TypeScript (strict mode)
- **Styling**: Pure CSS with CSS custom properties (design tokens)
- **i18n**: Native Astro i18n support
- **Content**: Astro Content Collections

## 🎨 Design System

The project uses a comprehensive design token system with:
- **Color modes**: Light, Dark, and High Contrast
- **CSS Variables**: For colors, typography, spacing, shadows, etc.
- **Atomic Design**: Components organized as atoms, molecules, and organisms
- **Accessibility**: WCAG 2.1 AA compliant with focus management and semantic HTML
- **RTL Support**: For Arabic language

## 📁 Project Structure

```
/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # UI components
│   │   ├── atoms/      # Basic components (Button, Icon)
│   │   ├── molecules/  # Composite components (Card)
│   │   └── organisms/  # Complex components (Header, Footer)
│   ├── content/        # Content collections
│   │   ├── places/     # Places data (JSON)
│   │   ├── events/     # Events data (JSON)
│   │   ├── trails/     # Trails data (JSON)
│   │   ├── articles/   # Articles (Markdown)
│   │   └── listings/   # Listings data (JSON)
│   ├── i18n/           # Internationalization
│   │   ├── locales/    # Translation files (JSON)
│   │   └── index.ts    # i18n utilities
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages (routes)
│   ├── styles/         # Global styles and tokens
│   └── utils/          # Utility functions
├── astro.config.mjs    # Astro configuration
└── tsconfig.json       # TypeScript configuration
```

## 🌍 Internationalization

The site supports 6 languages:
- French (fr) - default
- English (en)
- German (de)
- Spanish (es)
- Arabic (ar) - RTL
- Chinese (zh)

Language is handled via URL prefixes (e.g., `/en/`, `/de/`), with French as the default (no prefix).

## 🎨 Theme Support

Three theme modes are available:
- **Light mode** (default)
- **Dark mode**
- **High contrast mode** (for accessibility)

Theme preference is stored in localStorage and respects system preferences.

## 🧩 Content Collections

Content is managed through Astro's Content Collections:
- **places**: Restaurants, hotels, activities, shops
- **events**: Local events and festivals
- **trails**: Hiking and biking trails
- **articles**: Magazine articles (markdown)
- **listings**: Classified ads

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Skip to main content link
- Color contrast compliance (WCAG AA)
- Reduced motion support
- Screen reader friendly

## 🔍 SEO Features

- Server-side rendering (SSG)
- Semantic HTML structure
- Meta tags (title, description)
- Open Graph tags
- Canonical URLs
- Sitemap (to be generated)
- Structured data (to be added)
- Fast load times
- Mobile responsive

## 📝 Adding Content

### Adding a Place

Create a JSON file in `src/content/places/`:

```json
{
  "id": "unique-id",
  "name": "Place Name",
  "description": "Description...",
  "mainCategory": "restauration",
  "category": "French Cuisine",
  "imageUrl": "/images/places/image.jpg",
  "published": true
}
```

### Adding an Article

Create a Markdown file in `src/content/articles/`:

```markdown
---
id: "unique-id"
title: "Article Title"
excerpt: "Brief description"
imageUrl: "/images/articles/image.jpg"
category: "Category"
authorId: "author-id"
date: "2025-01-15T10:00:00"
published: true
---

# Article Title

Article content in markdown...
```

## 🎯 Future Enhancements

- [ ] Better-auth integration for authentication
- [ ] PostgreSQL database with Drizzle ORM
- [ ] Admin panel for content management
- [ ] Organizations support
- [ ] User profiles and communities
- [ ] Advanced search with filters
- [ ] Interactive maps
- [ ] Review system
- [ ] Booking system

## 📄 License

All rights reserved - Salut Annecy

## 🤝 Contributing

This is a private project. For any questions, please contact the team.
