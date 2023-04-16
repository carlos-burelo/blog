import { METADATA } from '#constants/data'

export default function meta ({ title, description, image }: Metadata) {
  return {
    title: title || METADATA.title,
    description: description || METADATA.description,
    image: image || METADATA.image,
  }
} 