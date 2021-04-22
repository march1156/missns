$(function(){
  //.sampleをクリックしてajax通信を行う
  $('.modal').on('click','.delete_btn',function(){
      $.ajax({
          url: '../php/delete.php',
          type: 'POST',
          /* json形式で受け取るためdataTypeを変更 */
          /* なおINSERTのみで値を持ってこない場合はtextでOK */
          dataType: 'text',
          data : {
              url : $('.modal_images img').attr('src')
          }
      }).done(function(data){
          /* 通信成功時 */
          alert('成功');
          $('#button img').removeClass('delete_btn');
          $('#button img').addClass('insert_btn');
          ////現在のimgからsrcを取得し、一部を書き換える
          var src = $('#button').children('img').attr('src').replace('del', 'in');
          //書き換えたsrcをimgタグに設定する
          $('#button').children('img').attr('src', src);
          var md = $('.modal_container').attr('id')+',';
          var storage = JSON.parse(window.localStorage.getItem("id"));
          if(storage==""){
            return false;
          }else if(storage.includes(md) !== false){
            console.log(storage.includes(md))
            storage = storage.replace(md, "");
          };
          var JSON_data=JSON.stringify(storage);
          localStorage.setItem('id',JSON_data);
      }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
       alert('error!!!');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
      });
    });
});