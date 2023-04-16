const Parser = new Intl.DateTimeFormat('es', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

export function parseDate (date: Date) {
  return Parser.format(date)
}

export function parseRelativeDate (date: Date) {
  const now = new Date()
  const diff = Math.abs(now.getTime() - date.getTime())
  const days = Math.floor(diff / (1000 * 3600 * 24))
  const hours = Math.floor(diff / (1000 * 3600))
  const minutes = Math.floor(diff / (1000 * 60))
  const seconds = Math.floor(diff / 1000)

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  } else if (seconds > 0) {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`
  } else {
    return 'now'
  }
}