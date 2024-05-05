

var fileInput = document.querySelector('.post input');
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.deeppost3 input').value = ''
  document.querySelector('.deeppost4 input').value = ''

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

  var formdata = new FormData(document.querySelector('.deeppost'));
  console.log(fileInput.files[0]);
  formdata.append("articleCover", fileInput.files[0]);
  formdata.append("articleCover", fileInput.files[0]);

  formdata.append("article_labels", "可爱");

  // formdata.append("article_topics", "0元玩转这座城");
  // formdata.append("article_topics", "谁能拒绝傻憨憨的小猫咪");
  // formdata.append("article_topics", "城市公园图鉴");
  // formdata.append("article_topics", "广州春天的动物园真好逛");
  // formdata.append("article_topics", "被毛茸茸治愈的瞬间");
  formdata.append("article_location", "广州");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/article/postArticle", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})
post.addEventListener('click', function () {
  //排他思想
  document.querySelector('.main').style.display = 'none'
  document.querySelector('.tabbottom').style.display = 'none'
  document.querySelector('.deeppost').style.display = 'block'
})
const charCount = document.querySelector('.deeppost3 span')
document.querySelector('.deeppost31').addEventListener("input", function () {
  // 获取输入框中的文本内容
  let inputText = this.value;

  // 更新字符计数
  charCount.textContent = `${inputText.length}/22字`;
  if (inputText.length >= 22) {
    this.value = inputText.substring(0, 22); // 截断文本
    this.setAttribute("maxlength", "22"); // 设置最大长度
  } else {
    this.removeAttribute("maxlength"); // 移除最大长度限制
  }
});