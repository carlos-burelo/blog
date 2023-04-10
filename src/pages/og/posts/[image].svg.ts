import type { APIRoute } from "astro"
import PostImage from '#components/svg/images/post'
import { generateOgImage } from '#utils/og'
import { getCollection, type CollectionEntry } from "astro:content"

const posts = await getCollection("posts")

export const get: APIRoute = async ({ params }) => {
  const post = posts.find((post) => post.slug === params.image) as CollectionEntry<"posts">

  return {
    headers: { 'Content-Type': 'image/svg+xml' },
    body: await generateOgImage(PostImage, post.data)
  }
}

export function getStaticPaths () {
  const paths = posts.map(({ slug }) => ({ params: { image: slug } }))
  return paths
}