let menu = document.querySelector('.menu'),
  target = document.querySelectorAll('.target'),
  wrapper = document.querySelectorAll('.wrapper'),
  videos = document.querySelectorAll('.video__mp4')

menu.addEventListener('click', () => {
  target.forEach((item) => {
    item.classList.toggle('active')
  })
})

wrapper.forEach((item) => {
  item.addEventListener('click', () => {
    target.forEach((el) => {
      el.classList.remove('active')
    })
  })
})

videos.forEach((video) => {
  video.addEventListener('mouseover', () => {
    video.play()
  })
  video.addEventListener('mouseout', () => {
    video.pause()
  })
})