import type { CollectionEntry } from 'astro:content'
import type { MarkdownHeading } from 'astro'
import type { JSXInternal } from 'preact/src/jsx'

export declare global {
  export interface Meta {
    title: string
    description: string
    image: string
  }
  export type Metadata = Partial<Meta>
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
      id: string
      slug: string
      body: string
      data: Record<string, any>
      collection: string
      render (): Promise<{
        Content: any
        headings: MarkdownHeading[]
        remarkPluginFrontmatter: Record<string, any>
      }>
    }

  }

  type Styles = JSXInternal.CSSProperties
}