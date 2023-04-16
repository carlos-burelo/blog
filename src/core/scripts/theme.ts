const $body = document.querySelector('body') as HTMLBodyElement

const storage = {
  get (key: string): string | null {
    return localStorage.getItem(key)
  },
  set (value: string): void {
    localStorage.setItem('theme', value)
  }
}

const $themeBtn = document.querySelector('.theme') as HTMLElement

enum Theme {
  Dark = 'dark',
  Light = 'light'
}

const theme = {
  get (): Theme | null {
    return storage.get('theme') as Theme
  },

  set (value: string): void {
    storage.set(value)
  }
}

const themeSwitcher = {
  init (): void {
    const currentTheme = theme.get()

    if (currentTheme) {
      $body.classList.add(currentTheme)
    } else {
      $body.classList.add(Theme.Dark)
      theme.set(Theme.Dark)
    }
  },

  toggle (): void {
    const currentTheme = theme.get()

    if (currentTheme === Theme.Dark) {
      $body.classList.replace(Theme.Dark, Theme.Light)
      $themeBtn.textContent = '🌞'
      theme.set('light')
    } else {
      $body.classList.replace(Theme.Light, Theme.Dark)
      $themeBtn.textContent = '🌚'
      theme.set(Theme.Dark)
    }
  }
}

themeSwitcher.init()

$themeBtn.addEventListener('click', () => {
  themeSwitcher.toggle()
})