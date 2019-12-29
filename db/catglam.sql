-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-12-2019 a las 15:50:10
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catglam`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_c` int(11) NOT NULL,
  `nombre_c` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_c`, `nombre_c`) VALUES
(1, 'Aros'),
(2, 'Moños'),
(3, 'Chokers');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_p` int(11) NOT NULL,
  `nombre_p` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion_p` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `categoria_p` int(11) NOT NULL,
  `precio_p` float NOT NULL,
  `stock_p` int(11) NOT NULL,
  `imagen_p` varchar(300) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_p`, `nombre_p`, `descripcion_p`, `categoria_p`, `precio_p`, `stock_p`, `imagen_p`) VALUES
(9, 'Aros Snake', 'Aros en forma de serpiente', 1, 200, 23, 'https://instagram.faep5-1.fna.fbcdn.net/vp/a78a5248b668f73635b845c7f7cfc162/5E47EEA2/t51.2885-15/e35/75472274_1603994659752016_5148776086399024308_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=104'),
(10, 'Aros Frutitas', 'Aros en forma de frutas miniatura', 1, 250, 42, 'https://instagram.faep5-1.fna.fbcdn.net/vp/e5c0e2a54744ea53545916d0caf18f93/5E54F561/t51.2885-15/sh0.08/e35/s640x640/72895211_2412297902139077_7803593493159452129_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=105'),
(11, 'Aros Cherry', 'Aros en forma de maxi cerezas', 1, 200, 14, 'https://instagram.faep5-1.fna.fbcdn.net/vp/bb731cbc57fd9d681b75fbae4fb2b0e3/5E56F9C9/t51.2885-15/e35/75349242_3827563410602427_3000509374932021474_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=103'),
(12, 'Moños Classic', 'Moños clásicos lisos', 2, 150, 81, 'https://instagram.faep5-1.fna.fbcdn.net/vp/af6f71fce10f50a9a2e1b4d1bead3ef0/5E4D590A/t51.2885-15/e35/69951466_420229931963667_5076026618851256287_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=103'),
(13, 'Moños Maxi Bordados', 'Moños XL bordados a mano', 2, 350, 11, 'https://instagram.faep5-1.fna.fbcdn.net/vp/c1b7e2ec7ac124dd768cd7de8dd95275/5E4F22B9/t51.2885-15/sh0.08/e35/s750x750/70850738_958794784475383_4894620667575320664_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=107'),
(14, 'Moños Bordados', 'Moños clásicos bordados a mano', 2, 280, 57, 'https://instagram.faep5-1.fna.fbcdn.net/vp/bb400b1475be008a3042641a9835067b/5E8404EA/t51.2885-15/sh0.08/e35/s640x640/72227188_927624124302864_8720856247187237430_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=100'),
(15, 'Chokers Sirena', 'Chokers iridiscentes con textura de escamas', 3, 450, 5, 'https://instagram.faep5-1.fna.fbcdn.net/vp/6e970c5da33c4cefa2a08327ea6c7d0d/5E506B66/t51.2885-15/e35/74986315_2319979738112087_195059078141706566_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=111'),
(16, 'Chokers Bold', 'Chokers gruesos lisos con colgante', 3, 500, 36, 'https://instagram.faep5-1.fna.fbcdn.net/vp/712f4c82aa91ab0e5aea5a2f1ac5645d/5E4CA54A/t51.2885-15/sh0.08/e35/s750x750/74610755_594715428001958_985155764451996510_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=102'),
(17, 'Chokers Soft', 'Chokers finos lisos con dijes o cadenas', 3, 380, 32, 'https://instagram.faep5-1.fna.fbcdn.net/vp/16fe77a2c3da31c0e5de32ffee43c911/5E5350A2/t51.2885-15/e35/73537455_2411458919108406_2695311097597387713_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=106');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_u` int(11) NOT NULL,
  `nombre_u` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido_u` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password_u` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_registro_u` datetime DEFAULT current_timestamp(),
  `usuario_u` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `permisos_u` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_u`, `nombre_u`, `apellido_u`, `password_u`, `fecha_registro_u`, `usuario_u`, `permisos_u`) VALUES
(1, 'Valeria', 'Mitchell', 'toga2000', '2019-11-27 01:25:37', 'valemescudero@gmail.com', 1),
(2, 'Sebastian', 'Otero', 'maxpower', '2019-11-27 20:23:24', 'sebastianmotero92@gmail.com', 0),
(6, 'Augusto', 'Sandino', 'ortiz277', '2019-12-13 01:40:21', 'ccsandino@gmail.com', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_c`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_p`),
  ADD KEY `fk_categoria` (`categoria_p`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_u`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`categoria_p`) REFERENCES `categorias` (`id_c`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
