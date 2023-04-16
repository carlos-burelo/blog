import { MAX_POSTS_PER_PAGE, MAX_SNIPPETS_PER_PAGE } from '#constants/data'
import type { GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'

export async function getPosts () {
  const posts = await getCollection('posts')
  const threeFirstPosts = posts.slice(0, 3)
  const restOfPosts = posts.slice(3)
  const getStaticPaths: GetStaticPaths = async ({ paginate }) => {
    return paginate(restOfPosts, { pageSize: MAX_POSTS_PER_PAGE })
  }
  return { getStaticPaths, latest: threeFirstPosts, posts }
}

export async function getSnippets () {
  const snippets = await getCollection('snippets')
  const getStaticPaths: GetStaticPaths = async ({ paginate }) => {
    return paginate(snippets, { pageSize: MAX_SNIPPETS_PER_PAGE })
  }
  return { getStaticPaths }
}

