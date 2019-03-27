// 原生ajax

let xmlHttp = new XMLHttpRequest()

xmlHttp.onreadystatechange = function () {
  if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
    console.log(xmlHttp.response);
  }
}
// 规定请求的额方式及请求的url
xmlHttp.open(url, method, false);
// 发送
xmlHttp.send();
console.log(xmlHttp.response);
