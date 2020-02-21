$(function() {
  getUserInfo();
});
function getUserInfo() {
  $.ajax({
    type: 'get',
    url: 'http://myp2pweb/getUserInfo.php',
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    success: function(res) {
      if (res) {
        var data = JSON.parse(res);
        for (var key in data) {
          $('#' + key).html(data[key]);
        }
      }
    }
  });
}
