import { defineCollection, reference, z } from 'astro:content';

// Common schema for locations
const locationSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  categoryId: z.string(),
  address: z.string().optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  email: z.string().optional(),
  imageUrl: z.string(),
  rating: z.number().min(0).max(5).optional(),
  reviewCount: z.number().optional(),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }).optional(),
  attributes: z.array(z.string()).default([]),
  hours: z.string().optional(),
  priceRange: z.string().optional(),
  published: z.boolean().default(true),
  // Additional fields for better content management
  featured: z.boolean().default(false),
  accessibility: z.string().optional(), // Accessibility information
  social: z.object({
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    twitter: z.string().optional(),
  }).optional(),
  tags: z.array(z.string()).default([]),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

// Restaurant collection
const restaurantsCollection = defineCollection({
  type: 'data',
  schema: locationSchema,
});

// Accommodation collection
const accommodationsCollection = defineCollection({
  type: 'data',
  schema: locationSchema,
});

// Activity collection
const activitiesCollection = defineCollection({
  type: 'data',
  schema: locationSchema,
});

// Service collection
const servicesCollection = defineCollection({
  type: 'data',
  schema: locationSchema,
});

// Category schema
const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  slug: z.string(),
  parentId: z.string().optional(),
  icon: z.string().optional(),
  order: z.number().optional(),
  published: z.boolean().default(true),
  // Additional fields for better categorization
  color: z.string().optional(), // Theme color for the category
  imageUrl: z.string().optional(), // Category illustration
  featured: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

// Category collections
const restaurantCategoriesCollection = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const accommodationCategoriesCollection = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const activityCategoriesCollection = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const serviceCategoriesCollection = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const articleCategoriesCollection = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const trailCategoriesCollection = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const eventCategoriesCollection = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const placeCategoriesCollection = defineCollection({
  type: 'data',
  schema: categorySchema,
});

// Legacy places collection (deprecated, kept for backward compatibility)
const placesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    mainCategory: reference('placeCategories'),
    category: z.string(),
    address: z.string().optional(),
    phone: z.string().optional(),
    website: z.string().optional(),
    email: z.string().optional(),
    imageUrl: z.string(),
    rating: z.number().min(0).max(5).optional(),
    reviewCount: z.number().optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    attributes: z.array(z.string()).default([]),
    hours: z.string().optional(),
    priceRange: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

// Event collection schema
const eventsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    endDate: z.string().optional(),
    location: z.string(),
    category: z.string(),
    organizer: z.string().optional(),
    website: z.string().optional(),
    price: z.string().optional(),
    published: z.boolean().default(true),
    // Additional event fields
    featured: z.boolean().default(false),
    ticketUrl: z.string().optional(), // Link to buy tickets
    contactEmail: z.string().optional(),
    contactPhone: z.string().optional(),
    capacity: z.number().optional(), // Maximum attendees
    tags: z.array(z.string()).default([]),
    ageRestriction: z.string().optional(), // e.g., "18+", "All ages"
    accessibility: z.string().optional(),
  }),
});

// Trail collection schema
const trailsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    excerpt: z.string(),
    description: z.string(),
    categoryId: z.string().optional(),
    difficulty: z.enum(['facile', 'moyen', 'difficile']),
    distance: z.string(),
    duration: z.string(),
    elevation: z.string().optional(),
    imageUrl: z.string(),
    startPoint: z.string().optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    attributes: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    // Additional trail fields
    featured: z.boolean().default(false),
    gpxFile: z.string().optional(), // Path to GPX track file
    season: z.string().optional(), // Best season (e.g., "Printemps-Automne")
    loopTrail: z.boolean().default(false), // Is it a loop?
    dogsAllowed: z.boolean().default(true),
    parkingInfo: z.string().optional(),
    waterSources: z.boolean().default(false), // Water available on trail?
    tags: z.array(z.string()).default([]),
  }),
});

// Article collection schema
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    excerpt: z.string(),
    imageUrl: z.string(),
    category: z.string(),
    categoryId: z.string().optional(),
    authorId: z.string(),
    date: z.string(),
    readTime: z.string().optional(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
  }),
});

// Listing collection schema
const listingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    type: z.enum(['emploi', 'immobilier', 'vente', 'service']),
    price: z.string(),
    imageUrl: z.string().optional(),
    authorId: z.string(),
    date: z.string(),
    published: z.boolean().default(true),
    // Additional listing fields
    featured: z.boolean().default(false),
    expiresAt: z.string().optional(), // When listing expires
    contactEmail: z.string().optional(),
    contactPhone: z.string().optional(),
    location: z.string().optional(), // City/area
    tags: z.array(z.string()).default([]),
    // Specific to employment listings
    company: z.string().optional(),
    contractType: z.string().optional(), // CDI, CDD, Stage, etc.
    // Specific to real estate
    surface: z.string().optional(), // m²
    rooms: z.number().optional(),
    // Specific to sales
    condition: z.string().optional(), // Neuf, Bon état, etc.
  }),
});

export const collections = {
  // New structured collections
  'restaurants': restaurantsCollection,
  'accommodations': accommodationsCollection,
  'activities': activitiesCollection,
  'services': servicesCollection,
  'restaurantCategories': restaurantCategoriesCollection,
  'accommodationCategories': accommodationCategoriesCollection,
  'activityCategories': activityCategoriesCollection,
  'serviceCategories': serviceCategoriesCollection,
  'articleCategories': articleCategoriesCollection,
  'trailCategories': trailCategoriesCollection,
  'eventCategories': eventCategoriesCollection,
  'placeCategories': placeCategoriesCollection,
  
  // Legacy collections (kept for backward compatibility)
  'places': placesCollection,
  'events': eventsCollection,
  'trails': trailsCollection,
  'articles': articlesCollection,
  'listings': listingsCollection,
};
