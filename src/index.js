var prev_a;
$(function() {
  window.onhashchange = changePage;
  changePage();
  getSession();
});
function changePage() {
  switch (location.hash) {
    case '#index':
      $('#root').load('modules/main/main.html');
      break;
    case '#loan':
      $('#root').load('modules/loan/loan.html');
      break;
    case '#borrowinfo':
      $('#root').load('modules/borrowinfo/borrowinfo.html');
      break;
    case '#mycenter':
      $('#root').load('modules/mycenter/mycenter.html');
      break;
    case '#accountinfo':
      $('#mycenter_root').load('modules/mycenter/myaccount/accountinfo/accountinfo.html');
      break;
    case '#changeinfo':
      $('#mycenter_root').load('modules/mycenter/myaccount/changeinfo/changeinfo.html');
      break;
    case '#loan_item':
      $('#root').load('modules/mycenter/loan/loan_item/loan_item.html');
      break;
    default:
      $('#root').load('modules/main/main.html');
  }
  if (prev_a) {
    prev_a.removeClass('active');
  } else {
    $("a[href='#index']")
      .parent()
      .removeClass('active');
  }
  prev_a = $("a[href='" + location.hash + "']").parent();
  prev_a.addClass('active');
}

function getSession() {
  $.ajax({
    type: 'get',
    url: 'http://myp2pweb/session.php',
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    success: function(res) {
      if (res != 'nologin') {
        sessionStorage.isLogin = true;
        $('#islogin').html(res);
      } else {
        $('#islogin').html('请登录');
      }
    }
  });
}
