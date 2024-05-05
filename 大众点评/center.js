const minemine = document.getElementById('minemine');

document.querySelector('.mine').addEventListener('click', function () {
  document.querySelector('.center').style.display = 'block'

  document.querySelector('.main').style.display = 'none'
})
minemine.addEventListener('change', function () {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  var formdata = new FormData();
  formdata.append("userId", "36");
  formdata.append("background", minemine.files[0]);
  console.log(minemine.files[0]);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/user/upload-background", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      const data = JSON.parse(result);
      console.log(data.data.backgroundphoto)
      document.querySelector('.centerpart2 .centerpart21 img').src = `http://127.0.0.1:5500${data.data.backgroundphoto}`
    })
    .catch(error => console.log('error', error));
})
let article_id = 0
let upzhu = 0
document.querySelector('.recommendall').addEventListener('click', function (e) {
  const closestRecommend = e.target.closest('.recommend1');
  if (closestRecommend) {
    console.log('可以');
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.detail').style.display = 'block';
    document.querySelector('.tabbottom').style.display = 'none';
    article_id = closestRecommend.getAttribute('data-id');
    addview(article_id)
    upzhu = closestRecommend.getAttribute('data-name');
    authorId = closestRecommend.getAttribute('data-authorId');
    document.querySelector('.detail1 :nth-child(3)').innerHTML = upzhu;
    document.querySelector('.detail1 :nth-child(4)').setAttribute('data-id', authorId);

    detailcontent(article_id)
    getcomment(article_id)
  }
});
function addview(article_id) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "article_id": article_id
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/article/increaseView", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
document.querySelector('.detail1 :nth-child(1)').addEventListener('click', function () {
  document.querySelector('.main').style.display = 'block';
  document.querySelector('.detail').style.display = 'none';
  document.querySelector('.tabbottom').style.display = 'flex';
})