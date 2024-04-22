var fileInput = document.querySelector('.post');
fileInput.addEventListener('click', e => {
  // document.querySelector('.tabbottom').style.display = 'none'
  document.querySelector('.main').style.display = 'none'
  const form = new FormData()
  // console.log(e.target.files[0]);
  // fd.append('img', e.target.files[0])
  // axios({
  //   url: 'http://8.134.148.60:4000/article/postArticle',
  //   method: 'POST',
  //   data: fd
  // }).then(result => {
  //   console.log(result);
  //   const imgUrl = result.data.data.url
  //   // document.querySelector('.photo').src
  // })
  console.log(e.target);
  // // })var form = new FormData();
  form.append("articleCover", e.target.files[0], "D:\\webLibrary\\考核\\二轮\\img\\cat1.jpg");
  form.append("articleCover", e.target.files[0], "D:\\webLibrary\\考核\\二轮\\img\\cat2.jpg");
  form.append("article_title", "广州免费撸猫公园-越秀公园");
  form.append("article_md", "周末休息好去处a:爬山or徒步?广州有一座占地5300平方米的免费公园9一越秀公园。无论是在春天还是夏天，公园都是休闲遛弯的好去处，茂密的植被给你供给最新鲜自然的空气，远离城市喧嚣，充实户外生活。虫鸣鸟啼，感受大自然的声音。咦?一辆毛茸茸的猫咪大卡车向你冲来!原来是猫界三花大美女，喜欢小动物的不要错过这座公园哦!#0元玩转这座城#谁能拒绝傻憨憨的小猫咪#城市公园图鉴#广州春天的动物园真好逛#被毛茸茸治愈的瞬间");
  form.append("article_labels", "宠物");
  form.append("article_labels", "萌宠");
  form.append("article_topics", "0元玩转这座城");
  form.append("article_topics", "谁能拒绝傻憨憨的小猫咪");
  form.append("article_topics", "城市公园图鉴");
  form.append("article_topics", "广州春天的动物园真好逛");
  form.append("article_topics", "被毛茸茸治愈的瞬间");
  form.append("article_location", "广州");

  var settings = {
    "url": "http://8.134.148.60:4000/article/postArticle",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJhY2NvdW50IjoiMjkxMjE3NTA4MSIsImlhdCI6MTcxMDc3MDYzNCwiZXhwIjoxNzEzMzYyNjM0fQ.brQciJfUNA9jmcdzxc9Tvzk06k3FusjHTdfJvhJh-9k",
      "User-Agent": "Apifox/1.0.0 (https://apifox.com)"
    },
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
})