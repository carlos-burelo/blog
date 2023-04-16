import type { GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'

type Collection = 'posts' | 'snippets' | 'works'

export default function params<T> (
  collectionName: T extends Collection ? T : never,
  prop: string
) {
  const getStaticPaths: GetStaticPaths = async () => {
    const items = await getCollection(collectionName)
    return items.map(i => ({
      params: { id: (<any>i).slug },
      props: { [prop]: i },
    }))
  }
  return { getStaticPaths }
}