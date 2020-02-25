$(function() {
  var data = JSON.parse(sessionStorage.getItem('borrowinfo'));
  for (var key in data) {
    $('#borrowinfo_' + key).text(data[key]);
  }
  $('.btn').on('click', toInvest);
  function toInvest() {
    apiGet(
      '/invest.php',
      function(res) {
        var result = parseInt(res.toString().trim());
        switch (result) {
          case 2:
            alert('可用金额不足，请充值！');
            break;
          case 1:
            alert('投资成功');
            location.href = '/';
            break;
          default:
            alert('投资失败，请稍后重试');
            break;
        }
      },
      {
        invest_money: $('#invest_money').val(),
        borrow_id: data['id']
      }
    );
    //   $.ajax({
    //     type: 'get',
    //     url: 'http://myp2pweb/invest.php',
    //     data: {
    //       invest_money: $('#invest_money').val(),
    //       borrow_id: data['id']
    //     },
    //     xhrFields: {
    //       withCredentials: true
    //     },
    //     crossDomain: true,
    //     success: function(res) {
    //       var result = parseInt(res.toString().trim());
    //       switch (result) {
    //         case 2:
    //           alert('可用金额不足，请充值！');
    //           break;
    //         case 1:
    //           alert('投资成功');
    //           location.href = '/';
    //           break;
    //         default:
    //           alert('投资失败，请稍后重试');
    //           break;
    //       }
    //     }
    //   });
  }
});
