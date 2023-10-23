import { z, defineCollection } from "astro:content";

const authorsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
    }),
});

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      avatar: image(),
      date: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      categories: z.string(),
    }),
});

export const collections = {
  author: authorsCollection,
  posts: postsCollection,
};
