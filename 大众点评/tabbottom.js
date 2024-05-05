const message = document.querySelector('.tabbottom .message')
const backtop = document.querySelector('.tabbottom .backtop')
const post = document.querySelector('.tabbottom .post')
const mine = document.querySelector('.tabbottom .mine')
const video = document.querySelector('.tabbottom .video')

backtop.addEventListener('click', function () {
  //排他思想
  document.querySelector('.tabbottom .tabbottomactive').classList.remove('tabbottomactive')
  this.classList.add('tabbottomactive')
})
mine.addEventListener('click', function () {
  //排他思想
  document.querySelector('.tabbottom .tabbottomactive').classList.remove('tabbottomactive')
  document.querySelector('.center').style.display = 'block'
  document.querySelector('.messagedetail').style.display = 'none'
  this.classList.add('tabbottomactive')
})
video.addEventListener('click', function () {
  //排他思想
  document.querySelector('.tabbottom .tabbottomactive').classList.remove('tabbottomactive')
  this.classList.add('tabbottomactive')
})