function guide(num){
  //変数に親の要素のIDをいれる
  var id = document.getElementsByClassName('modal');
  //numに入っている数字を格納
  var Num = num;
  //タグを生成
  id[0].insertAdjacentHTML('afterbegin', '<div class="modal_container" id="md0"></div>');
  var container = document.getElementsByClassName('modal_container');
  container[0].insertAdjacentHTML('afterbegin', '<div class="remove" onclick="Remove('+Num+')"></div>');
  container[0].insertAdjacentHTML('afterbegin', '<div class="modal_box_guide"></div>');
  var box = document.getElementsByClassName('modal_box_guide');
  box[0].insertAdjacentHTML('afterbegin','<img src="images/svg/missns_guide.svg">');
  //indexofが値が入ってないなら"-1"を返すので
  box[0].insertAdjacentHTML('afterbegin','<div class="modal_close" style="cursor:pointer"; onclick="Remove('+num+')"><img src="./images/icon/close_btn.svg" style="width=3.5rem;height:3.5rem;"></div>');
  //終わったらmodalを表示
  let mid = 'md'+Num;
  var modal = document.getElementById(mid);
  modal.style.display = 'block';
  modal.animate([{opacity: '0'}, {opacity: '1'}], 200);
  // return false;
}