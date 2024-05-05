const dialog = []
message.addEventListener('click', function () {
  //排他思想
  document.querySelector('.tabbottom .tabbottomactive').classList.remove('tabbottomactive')
  this.classList.add('tabbottomactive')
  document.querySelector('.main').style.display = 'none'
  document.querySelector('.messagedetail').style.display = 'block'

})
function receivemessage(receiver_id, sender_id, youorme) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`http://8.134.148.60:4000/message/unread?receiver_id= ${receiver_id}&sender_id= ${sender_id}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result);
      console.log(data.data);

      for (let i = 0; i < data.data.unreadCount; i++) {
        dialog.push({
          time: new Date(data.data[i].created_at),
          html: `<div class="dialog21">${data.data[i].created_at}</div>
               <div class="dialog22${youorme}">
                   <span>sdsds</span>
                   <span>${data.data[i].text}</span>
               </div>`
        });
      }
      dialog.sort((a, b) => a.time - b.time);
      document.querySelector('.dialog2').innerHTML = ""; // 清空原有内容
      dialog.forEach(item => {
        document.querySelector('.dialog2').innerHTML += item.html;
      });
    })

    .catch(error => console.log('error', error));
}
document.querySelector('.Messagetail3').addEventListener('click', function (e) {
  const closestRecommend = e.target.closest('.messagedetail31');
  const sender_id = closestRecommend.getAttribute('data-id');
  const name = closestRecommend.getAttribute('data-name');
  if (closestRecommend) {
    document.querySelector('.messagedetail').style.display = 'none'
    document.querySelector('.dialog').style.display = 'block'
    document.querySelector('.tabbottom').style.display = 'none'
    document.querySelector('.dialog1 :nth-child(2)').innerHTML = name
    document.querySelector('.dialog3 input').setAttribute('data-id', sender_id);
  }
  receivemessage(36, sender_id, 'you')
  receivemessage(sender_id, 36, 'me')
  dialog.length = 0
})
document.querySelector('.dialog1 :nth-child(1)').addEventListener('click', function () {
  document.querySelector('.messagedetail').style.display = 'block'
  document.querySelector('.dialog').style.display = 'none'
  document.querySelector('.tabbottom').style.display = 'block'
})
function postmessage(receiver_id, text) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "sender_id": 36,
    "receiver_id": receiver_id,
    "text": text
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/message/post", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
document.querySelector('.dialog3 input').addEventListener('keypress', function (event) {
  const id = this.getAttribute('data-id');
  if (event.keyCode === 13) {
    event.preventDefault(); // 阻止默认的换行行为
    let commentText = this.value.trim(); // 获取评论内容并去除首尾空格
    if (commentText !== '') {
      const comment = document.createElement('div');
      comment.textContent = commentText;
      // document.querySelector('.Detail43').appendChild(comment);
      this.value = ''; // 清空输入框内容
    }
    postmessage(id, commentText)
    // postcomment(article_id, commentText, null, null)
  }


});