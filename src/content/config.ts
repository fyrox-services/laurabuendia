import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    readingTime: z.number(),
    datePublished: z.date(),
    dateModified: z.date(),
    category: z.enum(['deporte']),
    image: z.string(),
    wordCount: z.number(),
    description: z.string(),
    author: z.enum(['Laura Buendía']),
    topPick: z.boolean().optional()
  }),
});

const services = defineCollection({
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    category: z.enum(['deporte']),
    image: z.string(),
  }),
});

export const collections = { posts, services };
