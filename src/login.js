var isPass = false;
$(function() {
  if (location.search.indexOf('fail') != -1) {
    $('#fail').css({ display: 'none', color: 'red' });
  }
  jigsaw.init(document.getElementById('captcha'), function() {
    isPass = true;
  });
  $('form').on('submit', checkPass);
});
function checkPass() {
  if (isPass) {
    return true;
  } else {
    return false;
  }
}
