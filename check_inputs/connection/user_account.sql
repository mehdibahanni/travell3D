-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 05:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Travel3D`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_account`
--

CREATE TABLE `user_account` (
  `id` int(11) NOT NULL,
  `first_name` varchar(19) NOT NULL,
  `last_name` varchar(19) NOT NULL,
  `birthday` varchar(11) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `email` varchar(19) NOT NULL,
  `number` varchar(11) NOT NULL,
  `identity` enum('user','Compny','Persen') NOT NULL,
  `password` varchar(38) NOT NULL,
  `md5_pass` varchar(209) NOT NULL,
  `confirm_pasword` varchar(38) NOT NULL,
  `md5_pass_confirm` varchar(209) NOT NULL,
  `other_identity` varchar(19) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_account`
--

INSERT INTO `user_account` (`id`, `first_name`, `last_name`, `birthday`, `gender`, `email`, `number`, `identity`, `password`, `md5_pass`, `confirm_pasword`, `md5_pass_confirm`, `other_identity`) VALUES
(1, 'Mehdi', '_Bahanni', 'may-205-28', 'male', 'mehdibahanni2002@gmail', '06988660', '', 'Mehdi2002Hollywood@Travel3D', 'Onwer', 'Mehdi2002Hollywood@Travel3D', '', 'Owner');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_account`
--
ALTER TABLE `user_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
