import type { CollectionEntry } from 'astro:content'
import type { MarkdownHeading } from 'astro'

export declare global {
  interface Paginated<T> {
    page: {
      data: CollectionEntry<T>[]
      start: number
      end: number
      size: number
      total: number
      currentPage: number
      lastPage: number
      url: {
        current: string
        next?: string
        prev?: string
      }
    }
  }
  interface PageProps {
    payload: {
      render (): Promise<{
        Content: any
        headings: MarkdownHeading[]
        remarkPluginFrontmatter: Record<string, any>
      }>
    }
  }
}