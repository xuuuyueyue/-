
const search = document.querySelector('.search')
const searchText = []
const sarr = JSON.parse(localStorage.getItem('searchArr'));
const history1 = document.querySelector('.history1');
document.querySelector('.note').addEventListener('click', function () {
  document.querySelector('.main').style.backgroundColor = 'rgb(239 235 235)'
  document.querySelector('.recommend1').style.backgroundColor = 'rgb(239 235 235)'
  document.querySelector('.tag2').style.display = 'none'
  document.querySelector('.search').style.width = '360px'
  document.querySelector('.searchback').style.display = 'block'
  document.querySelector('.searchback').style.display = 'block'
  document.querySelector('.tag-content').style.padding = '10px 0px';
  if (sarr && sarr.length > 0) { // 检查sarr是否存在且不为空数组
    render();
  }
})
document.querySelector('.address').addEventListener('click', function () {

  document.querySelector('.tag').style.display = 'none'
  document.querySelector('.tag2').style.display = 'none'
  document.querySelector('.search').style.width = '360px'
  document.querySelector('.searchback').style.display = 'block'
  if (sarr && sarr.length > 0) { // 检查sarr是否存在且不为空数组
    render();
  }
})

search.addEventListener('keypress', function (event) {
  // 检查按下的键是否是回车键
  if (event.key === 'Enter') {
    // 将搜索框的文本内容保存在数组中
    sarr.push(search.value);
    localStorage.setItem('searchArr', JSON.stringify(sarr));
    // 清空搜索框内容
    search.value = '';
    // 可以在这里进行进一步的处理，比如显示保存的文本内容等
    console.log('保存的文本内容数组:', sarr);
    render()
  }
});

function render() {
  if ((sarr && sarr.length > 0)) {
    document.querySelector('.history').style.display = 'block';
  }
  else {
    document.querySelector('.history').style.display = 'none';

  }
  const spanArr = sarr.map(function (ele) {
    console.log(ele);
    return `<span>${ele}</span>`;
  });
  history1.innerHTML = spanArr.join('');
}
document.querySelector('.delet').addEventListener('click', function () {
  sarr.splice(0, sarr.length)
  localStorage.setItem('searchArr', JSON.stringify(sarr));
  render()
})