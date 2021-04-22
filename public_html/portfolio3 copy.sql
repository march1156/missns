-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost
-- 生成日時: 2021 年 3 月 04 日 06:33
-- サーバのバージョン： 10.4.11-MariaDB
-- PHP のバージョン: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `xs980156_missns`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `reply_id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `posts`
--


-- --------------------------------------------------------

--
-- テーブルの構造 `reply`
--

CREATE TABLE `reply` (
  `id` int(11) NOT NULL,
  `rep_id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `genre` text DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `reply`
--

INSERT INTO `reply` (`id`, `rep_id`, `title`, `genre`, `url`) VALUES
(1, 1, '趣味主体', '#おばかリプ', 'images/svg/reply_1.svg'),
(2, 2, 'デカイ声', '#おばかリプ', 'images/svg/reply_2.svg'),
(3, 3, '彼氏欲しい', '#おばかリプ', 'images/svg/reply_3.svg'),
(4, 4, '引きこもる', '#おばかリプ', 'images/svg/reply_4.svg'),
(5, 5, '捨てられない', '#おばかリプ', 'images/svg/reply_5.svg'),
(6, 6, 'いい感じ', '#おばかリプ', 'images/svg/reply_6.svg'),
(7, 7, '彼氏とご飯', '#おばかリプ', 'images/svg/reply_7.svg'),
(8, 8, '指', '#おばかリプ', 'images/svg/reply_8.svg'),
(9, 9, '車の色', '#おばかリプ', 'images/svg/reply_9.svg'),
(10, 10, 'やめてください', '#おばかリプ', 'images/svg/reply_10.svg'),
(11, 11, 'おはようございます', '#ミスリプおじさん', 'images/svg/reply_11.svg'),
(12, 12, 'ライブ', '#ミスリプおじさん', 'images/svg/reply_12.svg'),
(13, 13, '講演', '#ミスリプおじさん', 'images/svg/reply_13.svg'),
(14, 14, '学校', '#FF外から失礼します', 'images/svg/reply_14.svg'),
(15, 15, '飲み', '#FF外から失礼します', 'images/svg/reply_15.svg'),
(16, 16, 'おでん', '#FF外から失礼します', 'images/svg/reply_16.svg'),
(17, 17, 'また行こうね', '#FF外から失礼します', 'images/svg/reply_17.svg'),
(18, 18, '半熟', '#FF外から失礼します', 'images/svg/reply_18.svg'),
(19, 19, 'カーテン', '#決めつけ', 'images/svg/reply_19.svg'),
(20, 20, '痩せなきゃ', '#決めつけ', 'images/svg/reply_20.svg'),
(21, 21, 'M1', '#決めつけ', 'images/svg/reply_21.svg'),
(22, 22, '番組', '#決めつけ', 'images/svg/reply_22.svg'),
(23, 23, '深夜にご飯', '#決めつけ', 'images/svg/reply_23.svg'),
(24, 24, '晩ご飯', '#決めつけ', 'images/svg/reply_24.svg'),
(25, 25, '剣道', '#自分語り', 'images/svg/reply_25.svg'),
(26, 26, '眠気', '#自分語り', 'images/svg/reply_26.svg'),
(27, 27, 'この店', '#自分語り', 'images/svg/reply_27.svg'),
(28, 28, 'この色', '#自分語り', 'images/svg/reply_28.svg'),
(29, 29, '友人と', '#謎リプ', 'images/svg/reply_29.svg'),
(30, 30, '旅行', '#謎リプ', 'images/svg/reply_30.svg'),
(31, 31, 'お互いの気持ち', '#謎リプ', 'images/svg/reply_31.svg'),
(32, 32, 'こういう人', '#謎リプ', 'images/svg/reply_32.svg'),
(33, 33, 'お仕事', '#謎リプ', 'images/svg/reply_33.svg'),
(34, 34, 'プレゼン', '#謎リプ', 'images/svg/reply_34.svg'),
(35, 35, '絵', '#謎リプ', 'images/svg/reply_35.svg'),
(36, 36, '前の仕事', '#誤字夢中', 'images/svg/reply_36.svg'),
(37, 37, 'ヤバイ', '#誤字夢中', 'images/svg/reply_37.svg'),
(38, 38, 'お寿司', '#不謹慎ハンター', 'images/svg/reply_38.svg'),
(39, 39, '元気', '#不謹慎ハンター', 'images/svg/reply_39.svg'),
(40, 40, 'SNS', '#不謹慎ハンター', 'images/svg/reply_40.svg'),
(41, 41, 'ゲーセン', '#不謹慎ハンター', 'images/svg/reply_41.svg'),
(42, 42, '薬', '#上から目線', 'images/svg/reply_42.svg'),
(43, 43, '苦手', '#上から目線', 'images/svg/reply_43.svg'),
(44, 44, '作業', '#上から目線', 'images/svg/reply_44.svg'),
(45, 45, 'トレード', '#上から目線', 'images/svg/reply_45.svg'),
(46, 46, '映画', '#質問', 'images/svg/reply_46.svg'),
(47, 47, '画像', '#質問', 'images/svg/reply_47.svg'),
(48, 48, 'かっこいい', '#質問', 'images/svg/reply_48.svg'),
(49, 49, '友達と', '#質問', 'images/svg/reply_49.svg'),
(50, 50, 'ご満悦', '#質問', 'images/svg/reply_50.svg'),
(51, 51, '久しぶりに', '#質問', 'images/svg/reply_51.svg'),
(52, 52, '面倒', '#質問', 'images/svg/reply_52.svg');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reply_id` (`reply_id`);

--
-- テーブルのインデックス `reply`
--
ALTER TABLE `reply`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルのAUTO_INCREMENT
--

--
-- テーブルのAUTO_INCREMENT `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- テーブルのAUTO_INCREMENT `reply`
--
ALTER TABLE `reply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- ダンプしたテーブルの制約
--

--
-- テーブルの制約 `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`reply_id`) REFERENCES `reply` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
