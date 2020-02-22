$(function() {
  $('button').on('click', changeinfo);
});
function changeinfo() {
  if (sessionStorage.isLogin && sessionStorage.isLogin == 'true') {
    $.ajax({
      type: 'POST',
      url: 'http://myp2pweb/changeInfo.php',
      data: {
        nickname: $('#change_nickname').val(),
        pwd: $('#change_pwd').val(),
        email: $('#change_email').val(),
        phone: $('#change_phone').val(),
        education: $('#change_edu').val()
      },
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: function(res) {
        // console.log(res);
        if (res) {
          alert('用户修改成功！');
        } else {
          alert('用户修改失败！');
        }
      }
    });
  } else {
    location.href = 'login.html';
  }
}
