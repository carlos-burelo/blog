import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    category: z.string(),

  })
})

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    preview: z.string(),
    repository: z.string(),
    tags: z.array(z.string()),
    stack: z.record(z.string(), z.number()),
    createdAt: z.date(),
  }),
})

const snippetCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.string(),
  }),
})

export const collections = {
  posts: blogCollection,
  works: workCollection,
  snippets: snippetCollection,
}