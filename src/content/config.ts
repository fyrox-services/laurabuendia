import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      metaTitle: z.string(),
      metaDescription: z.string(),
      h1: z.string(),
      readingTime: z.number(),
      datePublished: z.date(),
      dateModified: z.date(),
      category: z.enum([
        "accidentes de tráfico",
        "peritaje médico",
        "negligencia médica",
      ]),
      image: image(),
      wordCount: z.number(),
      description: z.string(),
      author: z.enum(["Laura Buendía"]),
      topPick: z.boolean().optional(),
    }),
});

const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      metaTitle: z.string(),
      metaDescription: z.string(),
      h1: z.string(),
      serviceType: z.string(),
      image: z.string(),
    }),
});

const categories = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts, services, categories };
