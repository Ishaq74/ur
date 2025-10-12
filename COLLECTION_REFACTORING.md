# Collection Schema Refactoring

## Overview

This document describes the refactored content collection schema that addresses the issues raised about:
1. Poorly designed collection schema (single "places" collection for different entities)
2. Hardcoded categories in code
3. Overly complex mega menu navigation

## New Collection Structure

### Entity Collections

Instead of a single `places` collection with a `mainCategory` field, we now have separate collections for each entity type:

#### 1. Restaurants Collection (`src/content/restaurants/`)
- **Purpose**: Store restaurant data
- **Schema**: 
  - `id` (string): Unique identifier
  - `name` (string): Restaurant name
  - `description` (string): Description
  - `categoryId` (string): Reference to restaurant category
  - `address`, `phone`, `website`, `email` (optional strings)
  - `imageUrl` (string): Image path
  - `rating` (number, 0-5, optional)
  - `reviewCount` (number, optional)
  - `coordinates` (object, optional): `{ lat, lng }`
  - `attributes` (array of strings): Features/amenities
  - `hours` (string, optional): Opening hours
  - `priceRange` (string, optional): Price indication
  - `published` (boolean): Publication status

#### 2. Accommodations Collection (`src/content/accommodations/`)
- **Purpose**: Store accommodation data (hotels, auberges, locations, campings)
- **Schema**: Same as restaurants collection

#### 3. Activities Collection (`src/content/activities/`)
- **Purpose**: Store activity and attraction data
- **Schema**: Same as restaurants collection

#### 4. Services Collection (`src/content/services/`)
- **Purpose**: Store service provider data (health, transport, maintenance)
- **Schema**: Same as restaurants collection

### Category Collections

Categories are now stored in content collections instead of being hardcoded:

#### 1. Restaurant Categories (`src/content/restaurantCategories/`)
- **Examples**: 
  - Bars & Cafés (with subcategories: Bars-Pubs, Cafés-thé)
  - Restaurants (with subcategories: Cuisine locale, Cuisine internationale)
  - Épiceries & Produits locaux

#### 2. Accommodation Categories (`src/content/accommodationCategories/`)
- **Examples**: Hôtels, Auberges, Locations, Campings

#### 3. Activity Categories (`src/content/activityCategories/`)
- **Examples**: Sports, Culture, Loisirs

#### 4. Service Categories (`src/content/serviceCategories/`)
- **Examples**: Santé, Transport, Maintenance

### Category Schema

All category collections share the same schema:
- `id` (string): Unique identifier
- `name` (string): Category name
- `description` (string, optional): Description
- `slug` (string): URL-friendly identifier
- `parentId` (string, optional): Reference to parent category for nested structure
- `icon` (string, optional): Icon name
- `order` (number, optional): Display order
- `published` (boolean): Publication status

## Benefits of New Structure

### 1. Better Organization
- Each entity type has its own collection
- Clearer data separation
- Easier to manage and maintain

### 2. Dynamic Categories
- Categories are stored as content, not hardcoded
- Easy to add/modify categories without code changes
- Supports hierarchical categories (parent/child)

### 3. Simpler Navigation
- Navigation is built from category collections
- No more hardcoded mega menu
- Cleaner, more maintainable code

### 4. Scalability
- Easy to add new entity types
- Easy to add new categories
- Flexible structure for future growth

## Migration from Legacy Structure

The old `places` collection is kept for backward compatibility. Pages can gradually migrate to use the new collections.

### Migration Steps for Content:

1. **Identify entity type** from `mainCategory` field
2. **Create category** in appropriate category collection if doesn't exist
3. **Copy entity data** to new collection:
   - Change `mainCategory` → remove (not needed)
   - Change `category` → `categoryId` (reference to category id)
4. **Update page references** from `/place/{id}` to `/restaurant/{id}`, etc.

### Example Migration:

**Old** (`places` collection):
```json
{
  "id": "r1",
  "name": "Le Bivouac",
  "mainCategory": "restauration",
  "category": "Cuisine Savoyarde",
  ...
}
```

**New** (`restaurants` collection):
```json
{
  "id": "r1",
  "name": "Le Bivouac",
  "categoryId": "cuisine-locale",
  ...
}
```

**Category** (`restaurantCategories` collection):
```json
{
  "id": "cuisine-locale",
  "name": "Cuisine locale",
  "slug": "locale",
  ...
}
```

## Updated Pages

### Restaurant Pages
- `/restaurants` - Lists all restaurants, supports `?cat=` filter
- `/restaurant/[slug]` - Individual restaurant detail page

### Navigation
The Header component now:
- Loads categories from content collections
- Dynamically builds dropdown menus
- Supports nested categories (parent/child relationship)
- No hardcoded category lists

## File Structure

```
src/content/
├── config.ts                      # Collection schemas
├── restaurants/                   # Restaurant data
│   ├── le-bivouac.json
│   ├── auberge-du-lac.json
│   └── pizza-annecy.json
├── accommodations/                # Accommodation data (empty for now)
├── activities/                    # Activity data (empty for now)
├── services/                      # Service data (empty for now)
├── restaurantCategories/          # Restaurant categories
│   ├── bars-cafes.json
│   ├── bars-pubs.json           # Child of bars-cafes
│   ├── cafes-the.json           # Child of bars-cafes
│   ├── restaurants.json
│   ├── cuisine-locale.json      # Child of restaurants
│   └── epiceries.json
├── accommodationCategories/       # Accommodation categories
│   ├── hotels.json
│   ├── auberges.json
│   ├── locations.json
│   └── campings.json
├── activityCategories/            # Activity categories
│   ├── sports.json
│   ├── culture.json
│   └── loisirs.json
└── serviceCategories/             # Service categories
    ├── sante.json
    ├── transport.json
    └── maintenance.json
```

## TODO

- [ ] Migrate remaining places data to appropriate collections
- [ ] Update hebergements page to use accommodations collection
- [ ] Update activites page to use activities collection
- [ ] Create services page to use services collection
- [ ] Add more categories as needed
- [ ] Add subcategories for existing categories
- [ ] Update all internal links to use new routes
- [ ] Consider deprecating old `places` collection once migration is complete
