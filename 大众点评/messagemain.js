
function fengzhuang1(index) {
  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/article/articleList?page=1&size=5&location=广州", requestOptions)
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result);
      console.log(data.data[index])
      console.log(data.data[index].article_covers[0])
      const article = data.data[index]
      // 创建一个新的 div 元素
      const divElement = document.createElement('div');
      divElement.classList.add('recommend1');
      divElement.setAttribute('data-id', data.data[index].article_id);
      divElement.setAttribute('data-name', data.data[index].author_name);
      divElement.setAttribute('data-authorId', data.data[index].author_id);

      // 创建内部结构
      divElement.innerHTML = `
        <div class="recommend2">
          <img src="${article.article_covers[0]}" alt="">
          <p>${article.article_title}</p>
          <span class="upzhu">${article.author_name}</span><i>aixin</i>
        </div>
      `;

      // 将新创建的 div 元素添加到 .recommendall 中
      document.querySelector('.recommendall').appendChild(divElement);
    })
    .catch(error => console.log('error', error));
}

// 使用 Promise 链确保顺序执行
fengzhuang1(0)
fengzhuang1(1)
fengzhuang1(2)
fengzhuang1(3)
fengzhuang1(4)
function newarticle(index) {
  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/article/getLatestArticleList?page=1&size=5", requestOptions)
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result);
      console.log(data.data[index])
      console.log(data.data[index].article_covers[0])
      const article = data.data[index]
      // 创建一个新的 div 元素
      for (let i = 0; i < data.length; i++) {
        const divElement = document.createElement('div');
        divElement.classList.add('recommend1');
        divElement.setAttribute('data-id', data.data[index].article_id);


        // 创建内部结构
        divElement.innerHTML = `
        <div class="recommend2">
          <img src="${article.article_covers[0]}" alt="">
          <p>${article.article_title}</p>
          <span class="upzhu">${article.author_name}</span><i>aixin</i>
        </div>
      `;


        // 将新创建的 div 元素添加到 .recommendall 中
        document.querySelector('.recommendall').appendChild(divElement);
      }
    })
    .catch(error => console.log('error', error));
}
function detailcontent(index) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`http://8.134.148.60:4000/article/getArticleMain?article_id=${index}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result);
      document.querySelector('.detail32').innerHTML = data.data.article_md
      document.querySelector('.detail331').innerHTML = data.data.article_uploaddate
      document.querySelector('.detail31').innerHTML = data.data.article_title
      document.querySelector('.detail332').innerHTML = data.data.article_location
    })
    .catch(error => console.log('error', error));
}




