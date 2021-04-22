//モーダルを閉じる時のボタン
function Remove(num){
  let mid = 'md'+num;
  var modal = document.getElementById(mid);
  modal.style.display = 'none';
  return false;
}