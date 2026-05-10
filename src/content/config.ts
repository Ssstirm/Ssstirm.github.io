import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    key: z.string(),
    locale: z.enum(['en', 'zh']),
    category: z.enum(['agent', 'xr', 'world']),
    order: z.number().default(0),
    title: z.string(),
    subtitle: z.string().optional(),
    period: z.string().optional(),
    role: z.string().optional(),
    org: z.string().optional(),
    stack: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
    summary: z.string(),
  }),
});

export const collections = { projects };
