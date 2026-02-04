import { pgTable, serial, text, timestamp, varchar, boolean, jsonb } from 'drizzle-orm/pg-core';

// Contact form submissions table
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  subject: varchar('subject', { length: 100 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  read: boolean('read').default(false).notNull(),
});

// Newsletter subscribers table
export const subscribers = pgTable('subscribers', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  active: boolean('active').default(true).notNull(),
});

// Products table for vape flavors
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  imageUrl: varchar('image_url', { length: 500 }),
  price: varchar('price', { length: 50 }),
  featured: boolean('featured').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Site analytics table
export const pageViews = pgTable('page_views', {
  id: serial('id').primaryKey(),
  page: varchar('page', { length: 255 }).notNull(),
  visitorId: varchar('visitor_id', { length: 100 }),
  userAgent: text('user_agent'),
  referrer: text('referrer'),
  country: varchar('country', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
