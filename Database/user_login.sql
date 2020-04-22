-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 22, 2020 at 08:54 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `email`, `password`, `created`) VALUES
(3, 'yagya', 'prakash', 'praksh@gmail.com', '$2b$10$VYMtulZSxW59Jr1YddE4ped/NZcUlfRhx7yJifxg01FsOKE45PFzG', '2020-04-09 20:24:09'),
(4, 'yagya', 'prakash', 'praksh@gmail3.com', '$2b$10$XLxxqqLoI1vaeaF1pqjPqeydSKp.5z2trl1pHh8EkfT.jeMMf8D1.', '2020-04-09 20:24:24'),
(5, 'yagya123', 'prakash', 'ooyfv@.com', '$2b$10$sClqr8HJCBeSCTe53JhutuLTSdz3yQByB.e3ulxelGLP3P2/6uXpq', '2020-04-09 20:24:44'),
(6, 'yagya12123', 'prakash', 'ooyf@.com', '$2b$10$F0O1PE726/8ruM0gvbGqCeEMXOPUylOy6rlPHiY6lOBH9ty2FGqRu', '2020-04-09 20:39:36'),
(7, 'yagya26', 'prakash', 'prakashyagya@gmail.com', '$2b$10$trkCmJMtvMnWhY5NvnsgCeuxlBaFYy17Y/OM4F./d84oOhpFw5mrq', '2020-04-10 18:03:58'),
(14, 'yagya', 'Ortiz', 'Lokeshsingh417@gmail.com', '$2b$10$INLvo3QThEMpGDa6xHUGqeGVouiAw1spHnJS9IHNMD/E24ft.ofJ2', '2020-04-11 14:21:15'),
(15, 'lokesh', 'prakash', 'mayank@gmail.com', '$2b$10$XrBLHLZpPlMMCqhegkifIeNTvckcAHiHtujXyFD3XqGO19O2lfxdG', '2020-04-11 14:22:29'),
(16, 'yagya', 'Ortiz', 'it@vinove.com', '$2b$10$7xPg75LSOXTWeGpq/7KccuRCS2KFbhKDwS/XT12q2coQupOBnsBRi', '2020-04-11 14:24:15'),
(17, 'yagya', 'Ortiz', 'lok@gmail.com', '$2b$10$kTDMrBVPJLtc/0rv4Nbl6eKgDoPPmGuvFVzz9ksvItUw6cCAgEaJe', '2020-04-11 14:26:39'),
(18, 'mayank', 'prakash', 'loke@gmail.com', '$2b$10$IXEoV6yJGbRVqXTYvrGGHuEBXumbVjpvivrvYRndDXJ.TSczh3N6.', '2020-04-11 14:30:04'),
(19, 'yagya', 'prakash', 'prakashyagya@gmail.co', '$2b$10$mjLrB8fGSPnH3q0GZ6jtTetuQXMzNY.Atsdl/76T.x/umdVUGXINa', '2020-04-21 14:12:46');

-- --------------------------------------------------------

--
-- Table structure for table `emps`
--

CREATE TABLE `emps` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `created` varchar(255) DEFAULT NULL,
  `salary` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emps`
--

INSERT INTO `emps` (`id`, `first_name`, `last_name`, `email`, `password`, `phoneNumber`, `created`, `salary`) VALUES
(2, 'yaLoke', 'prakash', 'prakashyagya@gmail.com', '$2b$10$wVP5K89L9BqCddGmZ/4gqOaCQOY9XjU0uR3EGQEqdCoujymbyifeq', '8368886265', '2020-04-22 05:53:19', 123456),
(3, 'yagya1234', 'prakash', 'prakashyagya1234@gmail.com', '$2b$10$m2T/klQlNG/LMMYGiXno9.Eukn4nuE681/NxZkZ.NBXbvz7DsWSMy', '8368886265', '2020-04-22 02:30:14', 12345),
(4, 'lokesh', 'prakash', 'prakashyagya@gmail.com', '$2b$10$6iJgx9IgD9GzbDTVNQ7Gi.1qgjynfU4Tr2/aWRlfH.R18gijUO3Z6', '8368886265', '2020-04-22 05:43:57', 123345);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emps`
--
ALTER TABLE `emps`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `emps`
--
ALTER TABLE `emps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
