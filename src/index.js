var prev_a;
$(function() {
  //    $('#root').load('modules/main/main.html')
  //    $('#root').load('modules/loan/loan.html')
  window.onhashchange = changePage;
  changePage();
});
function changePage() {
  switch (location.hash) {
    case '#index':
      $('#root').load('modules/loan/loan.html');
      break;
    case '#loan':
      $('#root').load('modules/loan/loan.html');
      break;
    default:
      $('#root').load('modules/main/main.html');
  }
  if (prev_a) prev_a.removeClass('active');
  prev_a = $('a[href=' + location.hash + ']:parent').addClass('active');
  console.log(prev_a);
}
