<?php
//Data Source Name(接続情報)
require_once('../dbconnect/dbconnect.php');

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
    // mysqlのバージョンが違うせいかうまく反応していないのでmysql、ver.5.7での公文をチェックする
    //SQL文作成
    // $sql = "SELECT p.reply_id, COUNT( p.reply_id ),RANK() OVER(ORDER BY p.reply_id DESC) ,r.title, r.genre FROM reply r,posts p WHERE p.reply_id = r.id GROUP BY p.reply_id";
    $sql = "SELECT p.reply_id, COUNT( p.reply_id ) AS count,r.title, r.genre FROM reply r,posts p WHERE p.reply_id = r.id GROUP BY p.reply_id DESC";

    //プリペアードステートメントの設定と取得
    $prestmt = $pdo->prepare($sql);

    //値の設定
    // $prestmt->bindValue(':id', '2');

    //SQL実行
    $prestmt->execute();

    //抽出結果取得
    $post = $prestmt->fetchAll(PDO::FETCH_ASSOC);
    //PDO::FETCH_ASSOC …連想配列で取得
    //PDO::FETCH_NUM 　…添え字配列で取得
    //PDO::FETCH_BOTH　…添え字＆連想配列の両方で取得(既定値)
}catch(PDOException $error){
    //エラー時の処理を書く
    echo $error->getMessage();
    echo $error->getCode();

    // //本来は、上記ログ出力し、下記のようになる。
    // header('Location: index.html');
    // exit;
}
//echo '<pre>';
//print_r($users);
// $rank = [];
// foreach( $post as $posts ){
//     $rank = [
//         'count' => $posts['COUNT( p.reply_id )'],
//         'rank' => $posts['RANK() OVER(ORDER BY p.reply_id DESC)'],
//         'title' => $posts['title'],
//         'genre' => $posts['genre']
//     ];
//     // var_dump(array($rank));
//     // echo '<br>';
// };
// print_r($rank);



