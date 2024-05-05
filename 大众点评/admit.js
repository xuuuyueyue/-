console.log('成功');
let token = 0
document.querySelector(".denglu").addEventListener("click", function () {
  // 将页面跳转到主页
  document.querySelector(".admit").style.display = 'none'
  document.querySelector(".main").style.display = 'block'
  document.querySelector(".tabbottom").style.opacity = '1'
})
document.querySelector(".other").addEventListener("click", function () {

  document.querySelector(".weixin").style.display = 'none'
  document.querySelector(".denglu").style.display = 'none'
  document.querySelector(".other").style.display = 'none'
  document.querySelector(".other1").style.display = 'block'
  document.querySelector(".other2").style.display = 'block'
  document.querySelector(".other3").style.display = 'block'
  document.querySelector('.phone').style.display = 'none'
  document.querySelector('.phoneex').style.display = 'none'
})
document.querySelector(".other3").addEventListener("click", function () {
  const password = document.querySelector(".other2").value;
  const account = document.querySelector(".other1").value;

  if (password === "") {
    alert('请输入密码');
    return;
  }
  if (account === "") {
    alert('请输入账号');
    return;
  }
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "account": account,
    "password": password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/user/login", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.code === 0) {
        token = result.data.token
        console.log(token);
        document.querySelector(".admit").style.display = 'none'
        document.querySelector(".main").style.display = 'block'
        document.querySelector(".tabbottom").style.opacity = ' 1'

        // 登录成功后跳转页面，使用提取的 token
      } else {
        alert('登录失败，请检查账号和密码');
        console.log(result);
      }
    })
    .catch(error => console.log('error', error));

});