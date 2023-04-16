const $navBtn = document.querySelector('.menu') as HTMLElement
const $navbar = document.querySelector('#navigation') as HTMLElement


$navBtn.addEventListener('click', () => {
  $navbar.classList.toggle('active')
})
