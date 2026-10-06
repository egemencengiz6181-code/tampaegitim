import { ukBodies, type PostSection } from './blog-bodies-uk'
import { worldBodies } from './blog-bodies-world'

export type { PostSection }
export const postBodies: Record<string, PostSection[]> = { ...ukBodies, ...worldBodies }
