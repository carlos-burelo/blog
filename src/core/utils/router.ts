interface Route {
  url: {
    current: string
    prev?: string
    next?: string
  }
  [key: string]: any
}

export function paginateMatcher (route: Route, path: string, expect: string) {
  const { current, prev, next } = route.url

  return {
    ...route,
    url: {
      current,
      ...(prev === path ? { prev: expect } : {}),
      ...(next === path ? { next: expect } : {}),
    }
  }
}