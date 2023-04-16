export const AUTHOR_NAME = 'Carlos Burelo'
export const AUTHOR_EMAIL = 'carlosfernandoburelo@gmail.com'
export const AUTHOR_ID = 'carlos-burelo'
export const AUTHOR_ROLE = 'Software Engineer and Web Developer'
export const AUTHOR_DESCRIPTION = 'I\'m Carlos Burelo, a web developer by hobby and active open source contributor 😃. I\'m currently a university student who occasionally dedicates himself to creating tools and web applications that improve productivity and support the community, with the hope of someday creating something really great!!👽.'
export const AUTHOR_CURRENT_SKILL = 'I\'m currently learning Rust🦀 to make my projects much faster🚀'
export const ORG_NAME = 'Coatl Labs'
export const ORG_ID = 'coatl-labs'

export const GITHUB_PROFILE = 'https://github.com/carlos-burelo'
export const GITHUB_REPOSITORY = 'https://github.com/carlos-burelo/blog'
export const GITHUB_API_PREFIX = 'https://api.github.com/users/'
export const GITHUB_API_FILTERS = '?sort=updated_at&order=asc'

export const USER_GITHUB_API = GITHUB_API_PREFIX + AUTHOR_ID + GITHUB_API_FILTERS
export const ORG_GITHUB_API = GITHUB_API_PREFIX + ORG_ID + GITHUB_API_FILTERS

export const IS_PROD = process.env.NODE_ENV === 'production'

export const HOST = IS_PROD ? 'https://carlosburelo.vercel.app' : 'http://localhost:3000'

export const FONT_API = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap'

export const METADATA = {
  title: 'Carlos Burelo - Software Engineer',
  description: 'Carlos Burelo is a software engineer based in Mexico City, Mexico. He is currently working at Coatl Labs as a full-stack developer.',
  image: `${HOST}/images/og-image.png`,
}


export const MAX_POSTS_PER_PAGE = 5
export const MAX_SNIPPETS_PER_PAGE = 12

export const EXPERIENCE = [
  {
    title: 'Web developer by GDSC',
    description: 'I\'m currently working as a web developer for GDSC UJAT, where I\'m developing a web app to help students to find their ideal mentor.',
  },
  {
    title: 'University programming advisor',
    description: 'I\'m currently working as a programming advisor for the university, where I\'m helping students to learn programming and solve their problems.',
  },
  {
    title: 'Electronics technician intern',
    description: 'I\'m currently working as an electronics technician intern for the university, where I\'m helping to maintain the university\'s electronics.',
  },
  {
    title: 'System engineer student',
    description: 'I\'m currently studying system engineering at the university, where I\'m learning about programming, electronics, and much more.',
  },
  {
    title: 'Web developer by hobby',
    description: 'I\'m currently working as a web developer by hobby, where I\'m developing a lot of projects to improve my skills and help the community.',
  }
]

export const t = {
  hero: {
    say: 'Hi, I\'m',
    name: 'Carlos Burelo',
    role: 'Software Engineer and Web Developer',
  },
  about: {
    title: 'About me',
    subTitle: 'Who am I?',
    description: AUTHOR_DESCRIPTION,
    worksButton: 'See my works',
    contactButton: 'Contact',
  },
  skills: {
    title: 'Skills',
    subTitle: 'What I can do?',
  },
  experience: {
    title: 'Experience',
  }
}
