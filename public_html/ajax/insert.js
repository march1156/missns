$(function(){
  //.sampleをクリックしてajax通信を行う
  $('.modal').on('click','.insert_btn',function(){
      $.ajax({
          url: '../php/insert.php',
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
          // $('p.kekka').text(data); //取得したHTMLを.resultに反映
          var md = $('.modal_container').attr('id')+',';
          var storage = JSON.parse(window.localStorage.getItem("id"));
          if(storage==""){
            return false;
          }else{
            md = md + storage;
            var JSON_data=JSON.stringify(md);
            localStorage.setItem('id',JSON_data);
            // return false;
          };
          // var JS_obj=JSON.parse(window.localStorage.getItem("id"));
          var check = $('#button img').hasClass('insert_btn');
          $('#button img').removeClass('insert_btn');
          $('#button img').addClass('delete_btn');
          ////現在のimgからsrcを取得し、一部を書き換える
          var src = $('#button').children('img').attr('src').replace('in', 'del'); 
          //書き換えたsrcをimgタグに設定する
          $('#button').children('img').attr('src', src); 
      }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
       alert('error!!!');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
      });
    });
});