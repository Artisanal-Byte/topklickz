// @ts-ignore
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/posts' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    excerpt: z.string().optional(),
    coverImage: z.string().optional(),
    author: z.object({
      name: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
    publishedDate: z.string().optional(),
    readTime: z.string().optional(),
    tags: z.array(z.string()).optional(),
    heroBadge: z.string().optional(),
    heroTitle: z.string().optional(),
    contentImage: z.string().optional(),
    contentImageAlt: z.string().optional(),
    secondaryImage: z.string().optional(),
    secondaryImageAlt: z.string().optional(),
    intro: z.array(z.string()).optional(),
    sections: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    secondarySections: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
  }),
});

export const collections = { posts };
