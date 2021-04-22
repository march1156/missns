<?php
require_once('../../dbconnect/dbconnect.php');
//ユーザーIDを生成
require('./create_id.php');
//クッキーチェック
$id = "";
$url = "";
if(!empty($_COOKIE['id'])){
    $id = $_COOKIE['id'];
}else{
    $rid = "";
    $rid = random();
    setcookie('id',$rid);
    $id = $_COOKIE['id'];
}
if(isset($_POST['url'])){
    $url = $_POST['url'];
}else{
    header('Location: ../html/main.html');
    exit;
}

try{
    //DB接続オブジェクト
    //PDO…PHP Data Object
    $pdo = new PDO($dsn, $db_user, $db_password);
    //let logo = getElementById('id');

    //PDOの設定変更
    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );
    $pdo->setAttribute(
        PDO::ATTR_EMULATE_PREPARES,
        false
    );

    //SQL文作成
    $sql = "SELECT id FROM reply WHERE url=:url";

    //プリペアードステートメントの設定と取得
    $prestmt = $pdo->prepare($sql);

    //値の設定
    $prestmt->bindValue(':url', $url);

    //SQL実行
    $prestmt->execute();

    //抽出結果取得
    $post = $prestmt->fetch(PDO::FETCH_ASSOC);

    if(!empty($post['id'])){
        //SQL文作成
        $sql = "DELETE FROM posts WHERE reply_id=:reply_id AND user_id=:user_id";
    
        //プリペアードステートメントの設定と取得
        $prestmt = $pdo->prepare($sql);
    
        //値の設定
        $prestmt->bindValue(':reply_id', $post['id']);
        $prestmt->bindValue(':user_id', $id);
    
        //SQL実行
        $prestmt->execute();
    }
}catch(PDOException $error){
    //エラー時の処理を書く
    echo $error->getMessage();
    echo $error->getCode();
    // echo 'なし';
    //本来は、上記ログ出力し、下記のようになる。
    //header('Location: error.html');
    //exit;
}

//echo '<pre>';
//print_r($users);
// $rank = [];
// $i=1;
// foreach( $post as $posts ){
//     // echo $posts["id"], $posts["age"], '<br>';

//     $rank[$i] = [
//         'id' => $posts['reply_id'],
//         'count' => $posts['COUNT( reply_id )'],
//         'rank' => $posts['RANK() OVER(ORDER BY reply_id DESC)'],
//     ];
//     // var_dump(array($rank)).'<br>';
//     $i++;
// };
// print_r($rank);



