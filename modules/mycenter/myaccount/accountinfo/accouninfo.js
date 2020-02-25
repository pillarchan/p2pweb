$(function() {
  getUserInfo();
  $('#btn_charge').on('click', chargeMoney);
});
function getUserInfo() {
  apiGet('/getUserInfo.php', function(res) {
    if (res) {
      var data = JSON.parse(res);
      for (var key in data) {
        $('#' + key).html(data[key]);
      }
    }
  });
  // $.ajax({
  //   type: 'get',
  //   url: 'http://myp2pweb/getUserInfo.php',
  //   xhrFields: {
  //     withCredentials: true
  //   },
  //   crossDomain: true,
  //   success: function(res) {
  //     if (res) {
  //       var data = JSON.parse(res);
  //       for (var key in data) {
  //         $('#' + key).html(data[key]);
  //       }
  //     }
  //   }
  // });
}
function chargeMoney() {
  $.ajax({
    type: 'get',
    url: 'http://myp2pweb/deposit.php',
    data: { charge_money: 1000 },
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    success: function(res) {
      if (res) {
        alert('充值成功！');
        getUserInfo();
      } else {
        alert('充值失败！');
      }
    }
  });
}
