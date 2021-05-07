function Modal(num){
  //変数に親の要素のIDをいれる
  var id = document.getElementsByClassName('modal');
  //numに入っている数字を格納
  var Num = num;
  var result = -1;
  //ローカルストレージの値を取得
  var local_mid = localStorage.getItem("id");
  if(local_mid !== null){
    var Check = 'md'+Num+',';
    var result = local_mid.indexOf(Check);
  }
  //タグを生成
  id[0].insertAdjacentHTML('afterbegin', '<div class="modal_container" id="md'+Num+'"></div>');
  var container = document.getElementsByClassName('modal_container');
  container[0].insertAdjacentHTML('afterbegin', '<div class="remove" onclick="Remove('+Num+')"></div>');
  container[0].insertAdjacentHTML('afterbegin', '<div class="modal_box"></div>');
  var box = document.getElementsByClassName('modal_box');
  box[0].insertAdjacentHTML('afterbegin','<div class="modal_images" style="background-color:#fff;"><img src="images/svg/reply_'+Num+'.svg"></div>');
  box[0].insertAdjacentHTML('beforeend','<hr>')
  box[0].insertAdjacentHTML('beforeend','<div class="modal_box_button"></div>')
  var box_button = document.getElementsByClassName('modal_box_button');
  //indexofが値が入ってないなら"-1"を返すので
  if(result !== -1){
    box_button[0].insertAdjacentHTML('beforeend','<div id="button"><img class="delete_btn" name="submit" src="./images/icon/button_del.svg" style="width=35px;height:35px;"></div>');
  }else{
    box_button[0].insertAdjacentHTML('beforeend','<div id="button"><img class="insert_btn" name="submit" src="./images/icon/button_in.svg" style="width=35px;height:35px;"></div>');
  };
  box[0].insertAdjacentHTML('afterbegin','<div class="modal_close" style="cursor:pointer"; onclick="Remove('+num+')"><img src="./images/icon/close_btn.svg" style="width=35px;height:35px;"></div>');
  //終わったらmodalを表示
  let mid = 'md'+Num;
  var modal = document.getElementById(mid);
  modal.style.display = 'block';
  modal.animate([{opacity: '0'}, {opacity: '1'}], 200);
}