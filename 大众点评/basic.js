function clickavator(classtyle, classtyle1) {
  document.querySelector(`${classtyle}`).addEventListener('click', function (e) {
    const basic = e.target.closest(`${classtyle1}`);


    if (basic) {
      document.querySelector('.detail').style.display = 'none';
      document.querySelector('.zcenter').style.display = 'block'
      document.querySelector('.Follow').style.display = 'none'
      // 获取评论作者的名字
      const authorId = basic.getAttribute('data-id');
      console.log(authorId);
      var myHeaders = new Headers();
      myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`http://8.134.148.60:4000/user/getUserInfo?user_id=${authorId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const data = JSON.parse(result)
          console.log(data);
          document.querySelector('.zcenterpart22 :nth-child(1)').innerHTML = `${data.data.name}`
          document.querySelector('.zcenterpart22 :nth-child(2)').innerHTML = `${data.data.introduce}`

        })
        .catch(error => console.log('error', error));
    }
  });
}

clickavator('.Detail43', '.detail43 .detail431')
clickavator('.Follow', '.follow1')



