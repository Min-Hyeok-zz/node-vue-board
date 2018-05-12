-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 18-05-11 19:14
-- 서버 버전: 10.1.31-MariaDB
-- PHP 버전: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `mvc`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `board`
--

CREATE TABLE `board` (
  `idx` int(11) NOT NULL,
  `writer` varchar(100) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `board`
--

INSERT INTO `board` (`idx`, `writer`, `subject`, `content`, `date`) VALUES
(21, '작성자1', '제목입니다', '컨텐츠입니다컨텐츠입니다', '2018-05-12 00:41:32'),
(22, '작성자2', '제목2입니다', '커엉ㄴ찬태ㅏㅍ넝피ㅐㅏㄴㅇ제목2입니다', '2018-05-12 00:41:32'),
(23, '작성자', '글제목입니다', '글내용 입니다 글작성 테스트', '2018-05-12 02:10:18'),
(24, '작강', '가알ㄴ아', 'dsfksdjfsdlfk;sdmflsdkmfj', '2018-05-12 02:11:22'),
(25, 'as', 'dasd', 'asd', '2018-05-12 02:12:13');

-- --------------------------------------------------------

--
-- 테이블 구조 `member`
--

CREATE TABLE `member` (
  `idx` int(11) NOT NULL,
  `id` varchar(100) NOT NULL,
  `pw` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `member`
--

INSERT INTO `member` (`idx`, `id`, `pw`, `name`) VALUES
(13, 'asd', 'asd', '테스트'),
(14, 'admin', '1234', '관리자'),
(15, 'test', '1234', '테스터');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `board`
--
ALTER TABLE `board`
  ADD PRIMARY KEY (`idx`);

--
-- 테이블의 인덱스 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `board`
--
ALTER TABLE `board`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- 테이블의 AUTO_INCREMENT `member`
--
ALTER TABLE `member`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
