import { z, defineCollection } from 'astro:content';

const serviceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        para1: z.string().optional(),
        para2: z.string().optional(),
    }),
});

export const collections = {
    'services': serviceCollection,
};