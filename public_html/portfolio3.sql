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

INSERT INTO `posts` (`id`, `reply_id`, `user_id`) VALUES
(1, 1, 'assdadsdsa'),
(2, 2, 'aaaasdsd'),
(3, 2, 'asds'),
(4, 2, 'asssds'),
(5, 3, 'ugnhkjjlljl'),
(6, 3, 'nHjasn32'),
(7, 3, 'nHjasn32'),
(8, 3, 'nHjasn32'),
(9, 3, 'nHjasn32'),
(10, 3, 'nHjasn32'),
(11, 3, 'nHjasn32'),
(12, 3, 'nHjasn32'),
(13, 3, 'nHjasn32'),
(14, 3, 'nHjasn32'),
(15, 3, 'nHjasn32'),
(16, 3, 'nHjasn32'),
(17, 1, 'nHjasn32'),
(18, 4, 'nh323'),
(19, 4, 'nHjasn32'),
(20, 4, 'nHjasn32'),
(21, 4, 'nHjasn32'),
(22, 4, 'nHjasn32'),
(23, 4, 'nHjasn32'),
(24, 4, 'nHjasn32'),
(25, 4, 'nHjasn32'),
(26, 4, 'nHjasn32'),
(27, 4, 'nHjasn32'),
(28, 4, 'nHjasn32'),
(29, 4, 'nHjasn32nHjasn32'),
(30, 4, 'nHjasn32nHjasn32nHjasn32nHjasn32'),
(31, 4, 'nHjasn32nHjasn32nHjasn32nHjasn32nHjasn32'),
(32, 4, 'nHjasn32'),
(33, 4, 'nHjasn32'),
(34, 4, 'nHjasn32'),
(35, 4, 'nHjasn32'),
(36, 4, 'asasa'),
(37, 4, 'nHjasn32'),
(38, 4, 'nHjasn32'),
(39, 4, 'nHjasn32'),
(40, 4, 'nHjasn32'),
(41, 4, 'nHjasn32'),
(42, 4, 'nHjasn32'),
(43, 4, 'nHjasn32nHjasn32'),
(44, 4, 'dddd212'),
(45, 4, 'dddd212'),
(46, 4, 'dddd212'),
(47, 4, 'dddd212'),
(48, 4, 'dddd212'),
(49, 4, 'dddd212'),
(50, 4, 'dddd212'),
(51, 4, 'dddd212'),
(52, 4, 'dddd212'),
(53, 4, 'dddd212'),
(54, 4, 'dddd212'),
(55, 4, 'dddd212'),
(56, 4, 'r4xnmkot'),
(57, 4, 'plfvi98c'),
(60, 4, 'r9d4saey'),
(61, 4, 'pna7j0hm'),
(62, 4, 'dykav972'),
(63, 4, 'imvhuf48'),
(64, 4, '246jtdkq'),
(73, 4, 'ibvtac2s'),
(74, 4, 'csua0bt7'),
(77, 4, '5gmn7wc9'),
(78, 4, 'y2g410d9'),
(79, 4, 'b2ny1tf0'),
(81, 4, 'ldoq9rgn'),
(82, 4, 'hiogbdna'),
(84, 4, 'ud3rgbn7'),
(85, 4, '69da20uk'),
(87, 4, 'g6ft4e3v'),
(88, 4, 'mpjwz7x9'),
(118, 4, 'po7c4q1k');

-- --------------------------------------------------------

--
-- テーブルの構造 `reply`
--

CREATE TABLE `reply` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `genre` text DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `reply`
--

INSERT INTO `reply` (`id`, `title`, `genre`, `url`) VALUES
(1, 'テスト', 'テスト', 'hhhhhhh.conoaso'),
(2, 'テスト', 'テスト', 'hhhhhhh.conoaso'),
(3, 'テスト', 'バカりぷ', 'images/svg/アセット_2.svg'),
(4, 'テスト', 'ばか', 'images/svg/reply_1.svg');

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
