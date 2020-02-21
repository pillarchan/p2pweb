var prev_a;
$(function() {
  //    $('#root').load('modules/main/main.html')
  //    $('#root').load('modules/loan/loan.html')
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
        $('#islogin').html(res);
      } else {
        $('#islogin').html('请登录');
      }
    }
  });
}
