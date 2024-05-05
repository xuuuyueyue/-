const as = document.querySelectorAll('.tag span')
const tag2 = document.querySelectorAll('.tag2 span')
const more1 = document.querySelectorAll('.more1 span')
const more2 = document.querySelectorAll('.more2 span')
const tagred = document.querySelector('.tagred')
// 遍历


as[0].addEventListener('click', function () {
  //排他思想
  document.querySelector('.tag .tagactive').classList.remove('tagactive')
  this.classList.add('tagactive')
  tagred.style.transform = ' translate(-124px, 28px)'
  document.querySelector('.active1').classList.remove('active1')
  document.querySelector('.tag-content :nth-child(1)').classList.add('active1')
})
as[1].addEventListener('click', function () {
  //排他思想
  document.querySelector('.tag .tagactive').classList.remove('tagactive')
  this.classList.add('tagactive')
  tagred.style.transform = ' translate(-65px, 28px)'
  document.querySelector('.active1').classList.remove('active1')
  document.querySelector('.address').classList.add('active1')
})
for (let i = 0; i < tag2.length; i++) {
  tag2[i].addEventListener('click', function () {
    //排他思想
    document.querySelector('.tag2 .tag2active').classList.remove('tag2active')
    this.classList.add('tag2active')
    if (i <= 2) {
      document.querySelector('.moreactive').classList.remove('moreactive')
      document.querySelector(`.more1 :nth-child(${i + 2})`).classList.add('moreactive')
    }
    if (i > 2) {
      document.querySelector('.moreactive').classList.remove('moreactive')
      document.querySelector(`.more2 :nth-child(${i - 1})`).classList.add('moreactive')
    }
  })
}
const up = document.querySelector(".up")
up.addEventListener("click", function () {
  const more = document.querySelector('.more')
  console.log('key');
  document.querySelector('.main').classList.add('black')
  document.querySelector('.w').style.backgroundColor = 'grey'
  more.style.display = 'block'
  document.addEventListener("click", function (event) {
    console.log('ket');
    // 检查点击事件发生的位置是否在盒子以外
    if (!more.contains(event.target) && !up.contains(event.target)) {
      // 如果是，则隐藏盒子
      more.style.display = "none";
      document.querySelector('.main').classList.remove('black')

    }
  });

})
for (let i = 1; i < more1.length; i++) {
  more1[i].addEventListener('click', function () {
    //排他思想
    document.querySelector('.moreactive').classList.remove('moreactive')
    this.classList.add('moreactive')
    document.querySelector('.tag2 div').style.transform = ` translateX(0px)`;
    document.querySelector('.tag2 .tag2active').classList.remove('tag2active')
    document.querySelector(`.tag2 span:nth-child(${i})`).classList.add('tag2active')
  })
}
for (let i = 1; i < 4; i++) {
  more2[i].addEventListener('click', function () {
    //排他思想
    document.querySelector('.moreactive').classList.remove('moreactive')
    this.classList.add('moreactive')
    document.querySelector('.tag2 div').style.transform = ` translateX(0px)`;
    document.querySelector('.tag2 .tag2active').classList.remove('tag2active')
    document.querySelector(`.tag2 span:nth-child(${i + 3})`).classList.add('tag2active')
  })
}
for (let i = 4; i < more2.length; i++) {
  more2[i].addEventListener('click', function () {
    document.querySelector('.moreactive').classList.remove('moreactive')
    this.classList.add('moreactive')
    document.querySelector('.tag2 div').style.transform = ` translateX(-${(i - 3) * 73}px)`;
    document.querySelector('.tag2 .tag2active').classList.remove('tag2active')
    document.querySelector(`.tag2 span:nth-child(${i + 3})`).classList.add('tag2active')
  })
}


