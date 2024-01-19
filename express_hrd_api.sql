-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jan 2024 pada 08.07
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_hrd_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `Nama_Pegawai` varchar(50) NOT NULL,
  `Jenis_Kelamin` char(25) NOT NULL,
  `No_Hp` varchar(20) NOT NULL,
  `Alamat` text NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Status` varchar(25) NOT NULL,
  `TanggalMasukKerja` date NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `employees`
--

INSERT INTO `employees` (`id`, `Nama_Pegawai`, `Jenis_Kelamin`, `No_Hp`, `Alamat`, `Email`, `Status`, `TanggalMasukKerja`, `Timestamp`) VALUES
(1, 'Muhammad Furqon Rizqi', 'Laki-laki', '0895332162678', 'BSI 2', 'uqon@gmail.com', 'Active', '2024-01-19', '2024-01-19 04:33:43'),
(2, 'Aisyah', 'Perempuan', '0128282829', 'jl.melati', 'aisyah@gmail.com', 'Active', '2024-01-19', '2024-01-19 04:33:49'),
(4, 'Vanessa', 'Perempuan', '0134883484', 'jl.bulan', 'vanessa@gmail.com', 'InActive', '2019-07-11', '2024-01-19 04:23:03'),
(5, 'Harry', 'Laki-laki', '0128823634', 'jl.mars', 'harry@gmail.com', 'InActive', '2018-10-05', '2024-01-19 04:24:26'),
(6, 'Fauzi', 'Laki-laki', '0128298473', 'jl.pluto', 'fauzi@gmail.com', 'Terminated', '2023-09-09', '2024-01-19 07:05:36');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
