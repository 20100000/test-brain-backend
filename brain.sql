-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Jun-2020 às 15:37
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `brain`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `apf_rural`
--

CREATE TABLE `apf_rural` (
  `id` int(20) UNSIGNED NOT NULL,
  `doc` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `data_insert` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `monitoramentos`
--

CREATE TABLE `monitoramentos` (
  `id` int(11) NOT NULL,
  `imovel` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `car` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `responsavel` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `atividade` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `municipio` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_emissao` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_validade` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_atualizacao` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_apf_rural` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `apf_rural`
--
ALTER TABLE `apf_rural`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_apf_rural` (`id`);

--
-- Índices para tabela `monitoramentos`
--
ALTER TABLE `monitoramentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_mon` (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `apf_rural`
--
ALTER TABLE `apf_rural`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `monitoramentos`
--
ALTER TABLE `monitoramentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
