import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['kaidan', 'horror']),
    tags: z.array(z.string()).default([]),
    seoKeywords: z.array(z.string()).default([]),
    workTitle: z.string(),
    fearRating: z.number().min(1).max(5),
    qualityRating: z.number().min(1).max(5),
    amazonUrl: z.string().url().optional(),
    streamingUrl: z.string().url().optional(),
    streamingService: z.string().optional(),
    xPost: z.string().optional(),
    relatedWorks: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
