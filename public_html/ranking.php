<?php
//ここでやること
//dbconect
require_once('../php/select.php');
require_once('../php/html_sp_cars.php');
$rank = 1;
$count_before = "";
$count = "";
//db接続して値を取得
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>missns</title>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Nunito:wght@200;300;400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/ranking.css" media="screen and (min-width: 1081px)">
<link rel="stylesheet" href="css/ranking_1080.css" media="screen and (max-width: 1080px)">
<link rel="stylesheet" href="css/scroll.css">
<link rel="stylesheet" href="css/modal.css">
<style>
	.list_item_text{
		color: #4D4D4D;
	}
</style>
</head>
<body>
	<header class="header">
		<div class="header_top">
			<div class="header_top_logo">
				<a href=""><img src="images/logo/logo.svg" alt="ロゴ画像"></a>
			</div>
			<nav class="header_nav">
				<ul>
					<li><a href="index.html"><h5>MISSNSとは</h5></a></li>
					<li><a href="main.html"><h5>図鑑</h5></a></li>
					<li class="line"><a class="line" href="ranking.php" style="color: #662D91;"><h5>ダメねランキング</h5></a></li>
				</ul>
			</nav>
		</div>
		<div class="header_main">
			<div class="header_main_back_img">
			</div>
			<div class="header_main_text">
				<h2 class="header_main_title" style="color: #8A43C6;">ダメねランキング</h2>
				<h3>
				ここでは皆さんが見たミスリプの中から<br>
				最もダメねボタンを押されたリプを、<br>
				ランキングで見ることができます。</h3>
			</div>
		</div>
		<div class="scroll">
			<div class="allow"><span></span>Scroll</div>
		</div>
	</header>
	<div class="modal"></div>
	<main class="main">
		<div class="main_contents" id="block01">
			</div>
					<ul class="list_container">
						<div class="ranking_list_container title">
							<li><h5>順位</h5></li>
							<li><h5>タイトル</h5></li>
							<li><h5>ダメね数</h5></li>
							<li><h5>ジャンル</h5></li>
						</div>
						<?php foreach( $post as $posts ){ ?>
							<div class="ranking_list_container">
								<?php if($count_before == ""){ ?>
								<?php $count_before = $posts['count'] ?>
								<?php } ?>
								<?php $count=$posts['count'] ?>
								<?php if($count_before == $count){ ?>
								<li><h3><?php echo $rank ?></h3></li>
								<?php }else{ ?>
								<?php $rank++; ?>
								<li><h3><?php echo $rank ?></h3></li>
								<?php } ?>
								<!-- モーダル の調整を行う -->
								<li class="list_modal" onclick="<?php echo 'Modal('.h($posts['reply_id']).')' ?>"><div class="list_item"><h4 class="list_item_text"><?php echo h($posts['title']); ?></h4></div></li>
								<li><h4><span class="h3"><?php echo h($posts['count']); ?></span>ダメね</h4></li>
								<li><p><?php echo h($posts['genre']); ?></p></li>
							</div>
						<?php }; ?>
					</ul>
		</div>
	</main>
	<footer class="footer">
		<nav class="footer_nav">
			<ul>
				<li><a href="index.html"><h6>MISSNSとは</h6></a></li>
				<li><a href="main.html"><h6>図鑑</h6></a></li>
				<li class="line"><a href="ranking.php" style="color: #662D91;"><h6>ダメねランキング</h6></a></li>
			</ul>
			<small class="footer_nav_right">(c)missns by keigo fukushima</small>
		</nav>
	</footer>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/create_modal.js"></script>
	<script type="text/javascript" src="js/fade_anime.js"></script>
	<script type="text/javascript" src="js/t.min.js"></script>
	<script type="text/javascript" src="js/typer.js"></script>
	<script type="text/javascript" src="ajax/insert.js"></script>
	<script type="text/javascript" src="ajax/delete.js"></script>
	<script type="text/javascript" src="js/remove.js"></script>
</body>

</html>
