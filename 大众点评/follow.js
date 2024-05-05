let followall = 0
let fanall = 0
const guanzhu = '关注'
const guanzhu1 = 2
const fensi1 = 1
const fensi = '粉丝'
const Focus = 'Focus'
const Fans = 'Fans'
function fanorfollow(fanorguanzhu, zhongwen, fanorguanzhu1, FocusorFans) {
  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`http://8.134.148.60:4000/user/getUser${FocusorFans}List?user_id=36`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result);
      console.log(data);
      fanorguanzhu = data.data.length
      let temp = ''
      let temp2 = ''
      document.querySelector(`.centerpart311 :nth-child(${fanorguanzhu1})`).innerHTML = `${fanorguanzhu}${zhongwen}`
      for (let i = 0; i < data.data.length; i++) {
        temp += `
      <div class="follow">
           <div class="follow1" data-id = "${data.data[i].user_id}">
        <div class="follow11"></div>
        <div class="follow12">
          <div class="follow121">${data.data[i].name}</div>
          <div class="follow122">biii</div>
        </div>
        <div class="follow13">yy</div>
        </div>
        `;
        temp2 += `  <div class="messagedetail3">
          <div class="messagedetail31" data-id = "${data.data[i].user_id}"  data-name = "${data.data[i].name}">
            <div class="messagedetail311"></div>
            <div class="messagedetail312">
              <div class="messagedetail3121">${data.data[i].name}</div>
              <div class="messagedetail3122"></div>
            </div>
          </div>

        </div>`
      }
      document.querySelector('.Follow').innerHTML = temp
      document.querySelector('.Messagetail3').innerHTML = temp2
    })
    .catch(error => console.log('error', error));
  document.querySelector(`.centerpart311 :nth-child(${fanorguanzhu1})`).addEventListener('click', function () {
    document.querySelector('.center').style.display = 'none'
    document.querySelector('.FFollow').style.display = 'block'

  })
}
fanorfollow(followall, guanzhu, guanzhu1, Focus)
fanorfollow(fanall, fensi, fensi1, Fans)
function followpost(id) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "action_type": 0,
    "first_user_id": 36,
    "second_user_id": id
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://8.134.148.60:4000/user/focusUser", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
document.querySelector('.detail1 :nth-child(4)').addEventListener('click', function () {
  const id = this.getAttribute('data-id');
  followpost(id);
});
document.querySelector('.wodemingzi :nth-child(1)').addEventListener('click', function () {
  document.querySelector('.center').style.display = 'block'
  document.querySelector('.FFollow').style.display = 'none'
})