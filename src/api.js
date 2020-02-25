/**
 * jQuery的ajax封装
 * url:请求路径
 * callback:回调函数
 * data:传参数据
 */
var baseUrl = 'http://myp2pweb';
function apiGet(url, callback, data = {}) {
  $.ajax({
    type: 'get',
    url: baseUrl + url,
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    data: data,
    success: callback
  });
}
function apiPost(url, callback, data = {}) {
  $.ajax({
    type: 'post',
    url: baseUrl + url,
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    data: data,
    success: callback
  });
}
