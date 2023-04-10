export const NAME = 'Carlos Burelo'
export const ROLE = 'Ingeniero en Software y Desarrollador Web'
export const ABOUT_ME = 'Soy Carlos Burelo, un desarrollador web por hobby y activo contribuidor del codigo abierto 😃. Actualemente soy un estudiante universitario que ocasionalmente se dedica a crear herramientas y aplicaciones web que mejoren la productividad y apoyen a la comunidad, con la esperanza de algun dia crear algo realmente grande!!👽.'
export const CURRENT_SKILL = 'I\'m currently learning Rust🦀 to make my projects much faster🚀'
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
    description: ABOUT_ME,
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

export const HOST = process.env.NODE_ENV === 'production'
  ? 'https://carlosburelo.vercel.app'
  : 'http://localhost:3000'