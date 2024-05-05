
document.querySelector('.detail42 input').addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // 阻止默认的换行行为
    let commentText = this.value.trim(); // 获取评论内容并去除首尾空格
    if (commentText !== '') {
      const comment = document.createElement('div');
      comment.textContent = commentText;
      document.querySelector('.Detail43').appendChild(comment);
      this.value = ''; // 清空输入框内容
    }
    postcomment(article_id, commentText, null, null)
  }


});
function getcomment(index) {
  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`http://8.134.148.60:4000/comment/getAllComments?page=1&limit=10&article_id=${index}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result);
      console.log(data)
      const comments = data.data.comments
      console.log(comments);
      const date = new Date(comments[i].publish_date);
      // 获取年、月、日
      const year = date.getFullYear();
      // 月份需要加一，因为 JavaScript 中的月份是从 0 开始计数的
      const month = date.getMonth() + 1;
      const day = date.getDate();

      // 将月份和日期补零，确保是两位数
      const monthString = month < 10 ? '0' + month : month.toString();
      const dayString = day < 10 ? '0' + day : day.toString();

      // 构造转换后的日期字符串
      const formattedDate = `${year}/${monthString}/${dayString}`
      // 创建一个新的 div 元素
      for (let i = 0; i < comments.length; i++) {
        const commentchilds = comments[i].child_comments
        let temp = '';
        for (let j = 0; j < commentchilds.length; j++) {
          temp += `<div class="detailreply">
          <div class="detailreply1" data-id="${commentchilds[j].author_id}"></div> 
  <div class="detailreply2">
            <span>${commentchilds[j].author_name}</span>
            <span>${commentchilds[j].content}</span>
            <span>${formattedDate}</span>
          </div>
          <div class="detailreply3"><i class="iconfont icon-aixin2"></i>
          <span>数字</span></div>
          </div>`
        }
        console.log(commentchilds);
        const divElement = document.createElement('div');
        divElement.classList.add('detail43');

        // 创建内部结构

        divElement.innerHTML = `
      <div class="detail431" data-id="${comments[i].author_id}"></div>
          <div class="detail432">
            <span>${comments[i].author_name}</span>
            <span>${comments[i].content}</span>
            <span>${formattedDate}</span>
            <span class="reply" data-id="${comments[i].author_name}" data-comment="${comments[i].comment_id}" data-name="${comments[i].author_id}">回复</span>
            <div class="Detailreply">${temp}</div>
          </div>
          <div class="detail433"><i class="iconfont icon-aixin2"></i>
          <span>数字</span></div>
      `;
        document.querySelector('.Detail43').appendChild(divElement);
      }

    })
    .catch(error => console.log('error', error));
}
let i = 1
function postcomment(article_id, value, parent_comment_id, target_user_id) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "article_id": article_id,
    "author_id": 36,
    "parent_comment_id": parent_comment_id,
    "target_user_id": target_user_id,
    "content": `${value}`
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/comment/commentAction", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
let authorId = 0
let commentId = 0

document.querySelector('.Detail43').addEventListener('click', function (e) {
  const reply = e.target.closest('.detail43 .reply');
  if (reply) {
    // 获取评论作者的名字
    const authorName = reply.getAttribute('data-id');
    authorId = reply.getAttribute('data-name');
    commentId = reply.getAttribute('data-comment');
    console.log(authorName);
    console.log(authorId);
    console.log(commentId);
    document.querySelector('.detail5 input').placeholder = `回复 ${authorName}`;
    document.querySelector('.detail5 input').focus();
    document.querySelector('.detail5 input').setAttribute('data-id', '1');

  }
});
document.querySelector('.detail5 input').addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // 阻止默认的换行行为
    let commentText = this.value.trim(); // 获取评论内容并去除首尾空格
    if (commentText !== '') {
      const comment = document.createElement('div');
      comment.textContent = commentText;
      if (document.querySelector('.detail5 input').getAttribute('data-id') === '0') {
        document.querySelector('.Detail43').appendChild(comment);
        postcomment(article_id, commentText, null, null)
      }
      if (document.querySelector('.detail5 input').getAttribute('data-id') === '1') {
        document.querySelector('.Detail43').appendChild(comment);
        postcomment(article_id, commentText, commentId, authorId)
      }
      this.value = ''; // 清空输入框内容
    }
  }


});