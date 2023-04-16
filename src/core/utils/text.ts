export function capitalize (str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function hyphenate (str: string): string {
  return str.replace(/([^-])([A-Z])/g, '$1-$2').replace(/([^-])([A-Z])/g, '$1-$2').toLowerCase()
}

export function camelize (str: string): string {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

