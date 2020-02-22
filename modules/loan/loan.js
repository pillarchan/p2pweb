$(function() {
  $('#btn_loan_credit').on('click', loanType);
  $('#btn_loan_car').on('click', loanType);
  $('#btn_loan_house').on('click', loanType);
});
function loanType(e) {
  sessionStorage.loanStyle = e.target.id;
  location.href = '#loan_item';
}
