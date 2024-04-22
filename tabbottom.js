const message = document.querySelector('.tabbottom .message')
const backtop = document.querySelector('.tabbottom .backtop')
const post = document.querySelector('.tabbottom .post')
const mine = document.querySelector('.tabbottom .mine')
const video = document.querySelector('.tabbottom .video')

message.addEventListener('click', function () {
  //排他思想
  document.querySelector('.tabbottom .tabbottomactive').classList.remove('tabbottomactive')
  this.classList.add('tabbottomactive')
  document.querySelector('.main').style.display = 'none'
  document.querySelector('.messagemain').style.display = 'block'
})
backtop.addEventListener('click', function () {
  //排他思想
  document.querySelector('.tabbottom .tabbottomactive').classList.remove('tabbottomactive')
  this.classList.add('tabbottomactive')
})
post.addEventListener('click', function () {
  //排他思想
  document.querySelector('.main').style.display = 'none'
})
mine.addEventListener('click', function () {
  //排他思想
  document.querySelector('.tabbottom .tabbottomactive').classList.remove('tabbottomactive')
  this.classList.add('tabbottomactive')
})
video.addEventListener('click', function () {
  //排他思想
  document.querySelector('.tabbottom .tabbottomactive').classList.remove('tabbottomactive')
  this.classList.add('tabbottomactive')
})