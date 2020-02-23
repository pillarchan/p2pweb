$(function() {
  initType();
  $('.borrow-money').on('change', changeInput);
});
function initType() {
  var loanStyle = sessionStorage.loanStyle;
  switch (loanStyle) {
    case 'btn_loan_credit':
      $('#loan_apply_type').html('信用标');
      $('#loan_allowed_limit').html('查询中……');
      getEduInfo();
      break;
    case 'btn_loan_car':
      $('#loan_apply_type').html('车抵标');
      $('#loan_allowed_limit').html('￥100,000');
      break;
    case 'btn_loan_house':
      $('#loan_apply_type').html('房抵标');
      $('#loan_allowed_limit').html('￥1,200,000');
      break;
    default:
      break;
  }
}
function getEduInfo() {
  $.ajax({
    type: 'get',
    url: 'http://myp2pweb/getEduInfo.php',
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    success: function(res) {
      if (res) {
        var data = JSON.parse(res);
        switch (data.education) {
          case '博士':
            $('#loan_allowed_limit').html('￥200,000');
            break;
          case '硕士':
            $('#loan_allowed_limit').html('￥150,000');
            break;
          case '专科':
            $('#loan_allowed_limit').html('￥80,000');
            break;
          case '本科':
            $('#loan_allowed_limit').html('￥100,000');
            break;
          default:
            $('#loan_allowed_limit').html('￥5,000');
            break;
        }
      } else {
        alert('你尚未登录，请先登录');
      }
    }
  });
}
function changeInput() {
  var borrowmoney = $('[name=borrowmoney]').val();
  var interest = $('[name=interest]').val();
  var borrowtime = $('[name=borrowtime]').val();
  var bonus = $('[name=bonus]').val();
  if (borrowmoney && interest && borrowtime && bonus) {
    $('#interest').html('￥' + ((borrowmoney * (interest / 100)) / 12) * borrowtime);
    $('#bonus').html('￥' + ((borrowmoney * (bonus / 100)) / 12) * borrowtime);
    $('#fee').html('￥' + borrowmoney * 0.02);
  }
}
