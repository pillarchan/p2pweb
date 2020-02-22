$(function() {
  getBorrowList();
});
function getBorrowList() {
  $.ajax({
    type: 'get',
    url: 'http://myp2pweb/getBorrowList.php',
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    success: function(res) {
      var list = JSON.parse(res);
      renderBorrowList(list);
    }
  });
}
function renderBorrowList(list) {
  let str = ``;
  for (let v of list) {
    str += `
    <tr>
    <td>${v['nickname']}</td>
    <td>${v['title']}</td>
    <td>${v['interest']}.00%</td>
    <td>${v['borrowmoney']}.00</td>
    <td>${v['repaytype'] == 0 ? '按月还款' : '按月到期'}</td>
    <td>${(v['investmoney'] / v['borrowmoney']).toFixed(2)}%</td>
    <td><button class="btn btn-danger btn-xs">查看</button></td>
  </tr>`;
  }
  $('#borrow_list').html(str);
}
