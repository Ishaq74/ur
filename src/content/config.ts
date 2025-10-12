import { defineCollection, z } from 'astro:content';

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

// Legacy places collection (deprecated, kept for backward compatibility)
const placesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    mainCategory: z.enum(['restauration', 'hebergement', 'activites', 'shopping']),
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
  
  // Legacy collections (kept for backward compatibility)
  'places': placesCollection,
  'events': eventsCollection,
  'trails': trailsCollection,
  'articles': articlesCollection,
  'listings': listingsCollection,
};
