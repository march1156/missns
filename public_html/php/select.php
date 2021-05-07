<?php
//Data Source Name(接続情報)
require_once('../dbconnect/dbconnect.php');

try{
    //DB接続オブジェクト
    //PDO…PHP Data Object
    $pdo = new PDO($dsn, $db_user, $db_password);

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
    $sql = "SELECT p.reply_id, COUNT( p.reply_id ) AS count,r.title, r.genre FROM reply r,posts p WHERE p.reply_id = r.id GROUP BY p.reply_id ORDER BY count DESC";

    //プリペアードステートメントの設定と取得
    $prestmt = $pdo->prepare($sql);

    //SQL実行
    $prestmt->execute();

    //抽出結果取得
    $post = $prestmt->fetchAll(PDO::FETCH_ASSOC);
}catch(PDOException $error){
    //エラー時の処理を書く
    echo $error->getMessage();
    echo $error->getCode();

    // //本来は、上記ログ出力し、下記のようになる。
    // header('Location: index.html');
    // exit;
}



