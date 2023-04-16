const $slider = document.querySelector('.slider') as HTMLDivElement
const $slideBtns = document.querySelectorAll(
  '.controls button'
) as NodeListOf<HTMLButtonElement>

$slideBtns.forEach((button, i) => {
  button.addEventListener('click', () => {
    $slider.scrollTo({
      left: i * $slider.offsetWidth,
      behavior: 'smooth',
    })
  })
})

$slider.addEventListener('scroll', () => {
  const index = Math.round($slider.scrollLeft / $slider.offsetWidth)
  $slideBtns.forEach(button => button.classList.remove('active'))
  $slideBtns[index].classList.add('active')
})

$slideBtns[0].classList.add('active')