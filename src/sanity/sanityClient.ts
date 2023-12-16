import { createClient } from '@sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_ID,
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2021-03-25', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
    const posts = await client.fetch('*[_type == "post"]')
    return posts
}

type Post = any

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function createPost(post: Post) {
    const result = client.create(post)
    return result
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function updateDocumentTitle(_id: string, title: string) {
    const result = client.patch(_id).set({ title })
    return result
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getCourseVisibilityById(_id: string): Promise<string> {
    const slug = `{visibility}`
    const q = `*[_type == "courses"  && _id == "${_id}"]${slug}`; // output *[_type == "courses"  && _id == "046aeaf4-43b0-4c5f-aab3-cead701ce7a4"]{visibility}
    const visibility = await client.fetch(q);
    // console.log(visibility);
    return visibility[0].visibility || 'private';
}

// Image URL builder
export const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    const url = builder.image(source);
    // console.log(url.url());
    return url;
}