import { z, defineCollection } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        preview: z.string(),
        draft: z.boolean(),
        tags: z.array(z.string()),
        categories: z.array(z.string()),
        img: z.object({
            url: z.string(),
            caption: z.string(),
            captionLink: z.string(),
            altText: z.string() 
        })
    })
})

const announcements = defineCollection({
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        preview: z.string(),
        draft: z.boolean(),
        tags: z.array(z.string()),
        categories: z.array(z.string()),
        img: z.object({
            url: z.string(),
            caption: z.string(),
            captionLink: z.string(),
            altText: z.string() 
        })
    })
})



export const collections = { posts, announcements };