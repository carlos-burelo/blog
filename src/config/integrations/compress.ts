import compress from 'astro-compress'

export default compress({
  html: true,
  css: true,
  js: true,
  img: true,
  svg: true,
})