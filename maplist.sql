-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2021 at 09:26 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maplist`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('Y','N') NOT NULL DEFAULT 'Y',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Bogor Barat', 'Y', NULL, NULL),
(2, 'Bogor Utara', 'Y', NULL, NULL),
(3, 'Bogor Selatan', 'Y', NULL, NULL),
(4, 'Bogor Timur', 'Y', NULL, NULL),
(7, 'Tangerang Dekat', 'Y', NULL, NULL),
(8, 'Tangerang Jauh', 'Y', NULL, NULL),
(9, 'Bekasi Barat', 'Y', NULL, NULL),
(10, 'Bekasi Timur', 'Y', NULL, NULL),
(11, 'Jakarta Pusat', 'Y', NULL, NULL),
(12, 'Cirebon', 'Y', NULL, NULL),
(13, 'Jawa Barat', 'Y', NULL, NULL),
(14, 'Karawang', 'Y', NULL, NULL),
(15, 'Jakarta Utara', 'Y', NULL, NULL),
(16, 'Jakarta Barat', 'Y', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `addr` text DEFAULT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `id_area` int(10) NOT NULL,
  `description` text DEFAULT NULL,
  `uri` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `name`, `addr`, `lat`, `lng`, `id_area`, `description`, `uri`, `pic`, `phone`, `created_at`, `updated_at`) VALUES
(88, 'Prima Perkasa', NULL, '-6.6739984', '108.5054028', 12, NULL, 'OwC45waY55mqiQgspWyVHKjZFABF9sSzyK98bYWn.jpg', NULL, NULL, '2021-11-09 20:50:35', '2021-11-09 20:50:35'),
(89, 'Hendra Putra', NULL, '-6.870215727248461', '108.49705179013445', 13, NULL, 'YppzdDkIRALIlQgZmrxT3lCugp2X0Bk4BRvvbzuo.jpg', NULL, NULL, '2021-11-09 20:56:46', '2021-11-09 20:56:46'),
(90, 'Toko ABC', NULL, '-6.309214901747922', '107.29825644582868', 14, NULL, 'MiGKtzMXN4UOMYa7biCGpt3qpFfjpji8OsDs6wUF.jpg', NULL, NULL, '2021-11-09 21:02:20', '2021-11-09 21:02:20'),
(91, 'Kiki Furniture', NULL, '-6.138906652842524', '106.58709937301828', 8, NULL, 'Gay0sAQen9j0npgsojTPBGRlO425Z68LJpyak16v.jpg', NULL, NULL, '2021-11-09 21:03:38', '2021-11-09 21:03:38'),
(92, 'Ekspedisi Hari Jaya', NULL, '-6.1378023663701144', '106.77337557465366', 15, NULL, 'yv0Pf18TXP7nELGiHdGqtBOMUm7SB5Y4ls2MA1nZ.jpg', NULL, NULL, '2021-11-09 21:05:38', '2021-11-09 21:05:38'),
(93, 'Ekspedisi Kencana Glory', NULL, '-6.135232872030184', '106.7282758122204', 16, NULL, '9NCyvDV946XRobzwxmafb63fPdOmhHmEi3C91237.jpg', NULL, NULL, '2021-11-09 21:07:07', '2021-11-09 21:07:07'),
(94, 'Toko Jono', NULL, '-6.362912859914686', '106.65694434090571', 7, NULL, 'aVg7YhMF6NO08zFpLsAQKzCb7P4MLQCKglPlfssE.jpg', NULL, NULL, '2021-11-09 21:08:55', '2021-11-11 23:50:21'),
(95, 'Ekspedisi UJM', NULL, '-6.1307226', '106.8078103', 15, NULL, 'amTsV7qc3AzUPgMq8CMPbxBoBlJw87DZ0dYsRsmB.jpg', NULL, NULL, '2021-11-09 21:11:12', '2021-11-09 21:11:12'),
(96, 'Ekspedisi STS', NULL, '-6.149554461928971', '106.77167583806558', 15, NULL, 'da18Kapc2umG5B3wbHIWJKI8kmrwpDYimJof9Nuj.jpg', NULL, NULL, '2021-11-09 21:12:19', '2021-11-09 21:12:19'),
(97, 'Florindo', NULL, '-6.326537578695305', '106.57239808055418', 8, NULL, 'florindo.jpeg', NULL, NULL, '2021-11-09 21:13:42', '2021-11-09 21:13:42'),
(98, 'Ekspedisi Quantum', NULL, '-6.409470', '106.730070', 7, NULL, '3tLBlJD8LNxEb8wqRnuO3v4hIgsTWxL8A03mfTKU.jpg', NULL, NULL, '2021-11-09 21:14:58', '2021-11-09 21:14:58'),
(99, 'PT. Ekatunggal Tunas Mandiri', 'Jl. Pahlawan No.29A, RT.003/RW005, Sanja, Kec. Citeureup, Bogor, Jawa Barat 16810', '-6.510267344418401', '106.8653413387919', 13, NULL, 'etm.jpg', NULL, NULL, '2021-11-09 21:31:04', '2021-11-10 22:03:30'),
(137, 'Ekspedisi BSM', NULL, '-6.1629159', '106.6645687', 8, 'Dunia Mebel', 'F2kRmisPuFATJpUdiE5g6kEj00np18eJEDpkD6Zm.jpg', NULL, NULL, '2021-11-11 00:29:19', '2021-11-11 00:29:55'),
(144, 'Ekspedisi expressindo sarana perkasa', NULL, '-6.1231424764061835', '106.73735898468401', 15, 'Hengky', 'uulUL8MKvPyNHWDNR4azWxrFjcULlMQfTBctXrEi.jpg', NULL, NULL, '2021-11-12 00:53:54', '2021-11-12 00:53:54'),
(145, 'Expedisi Artha jaya express', NULL, '-6.124005850783669', '106.74255890496083', 15, 'Amrinal', 'FNsZwnygGNhq14h6DXUcJt3nGh5cbiAPQJvJAAT8.jpg', NULL, NULL, '2021-11-12 00:55:39', '2021-11-12 00:55:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `id_area` (`id_area`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `location_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `area` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
