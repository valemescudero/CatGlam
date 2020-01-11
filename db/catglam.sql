-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-01-2020 a las 21:31:57
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
-- Estructura de tabla para la tabla `blog`
--

CREATE TABLE `blog` (
  `id_b` int(11) NOT NULL,
  `imagen_b` varchar(600) NOT NULL,
  `texto_b` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`id_b`, `imagen_b`, `texto_b`) VALUES
(1, 'https://instagram.faep5-1.fna.fbcdn.net/v/t51.2885-15/e35/76794625_753161395161393_7747453628213325384_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=jov6Ozboqn8AX9b2GXw&oh=c84f85d11343fe7c8526be61e943ec11&oe=5EAF974E', 'Les dejo el <a href=\"www.instagram/explore/tags/bestnine2019/\">#bestnine2019</a> Espero que este año sea para Cat Glam aún más lleno de crecimiento y cositas bellas ! Gracias por acompañarme año a año!<br>En el puesto 1°están los aritos fimo de la colección Frutitas! <br>Después en el 2° puesto están los aritos Gummy de la nueva colección de resina con la que estoy más que feliz!  Seguidos de el 3° puesto donde están el choker Glitter Pink con el collar Chupete en fucsia! <a href=\"https://www.instagram.com/p/B6yBbRNndRc/\">Leer más</a>'),
(4, 'https://instagram.faep5-1.fna.fbcdn.net/v/t51.2885-15/e35/70875433_171409580911995_7983831206240383923_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1YlnxVFsXIsAX81XSuB&oh=f28bd819c6ac1c0042e977851167ddae&oe=5E94EE5E', '¡Les dejo este pequeño aviso! Para que lo tengan en cuenta: desde el 31/12 hasta el 5/1 @showroomaquelarre se va a tomar un merecido descansito y durante enero va a contar con horario de verano de 16 a 20hs. Dicho esto ya queda poquito para el año que viene y espero que se estén preparando con todo! ');

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
(3, 'Chokers'),
(5, 'Pines'),
(6, 'Sarasa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallecompra`
--

CREATE TABLE `detallecompra` (
  `ido_d` int(11) NOT NULL,
  `idp_d` int(11) NOT NULL,
  `precio_d` int(11) NOT NULL,
  `cant_d` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detallecompra`
--

INSERT INTO `detallecompra` (`ido_d`, `idp_d`, `precio_d`, `cant_d`) VALUES
(18, 9, 200, 2),
(18, 10, 250, 3),
(20, 11, 200, 1),
(21, 11, 200, 1),
(22, 16, 500, 2),
(22, 17, 380, 1),
(23, 10, 250, 4),
(24, 10, 250, 55),
(25, 10, 250, 56),
(26, 10, 250, 55),
(27, 10, 250, 177),
(28, 10, 250, 135),
(29, 10, 250, 234),
(30, 10, 250, 101),
(31, 10, 250, 101),
(32, 10, 250, 323),
(33, 10, 250, 898),
(34, 10, 250, 1342342),
(35, 10, 250, 90),
(36, 11, 200, 13),
(37, 16, 500, 3),
(37, 15, 450, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordencompra`
--

CREATE TABLE `ordencompra` (
  `id_o` int(11) NOT NULL,
  `idu_o` int(11) NOT NULL,
  `fecha_o` datetime NOT NULL DEFAULT current_timestamp(),
  `realizado` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ordencompra`
--

INSERT INTO `ordencompra` (`id_o`, `idu_o`, `fecha_o`, `realizado`) VALUES
(13, 2, '2020-01-04 14:02:31', 1),
(14, 2, '2020-01-04 14:06:31', 1),
(15, 2, '2020-01-04 14:06:56', 1),
(16, 2, '2020-01-04 14:13:48', 1),
(17, 2, '2020-01-04 14:15:42', 1),
(18, 2, '2020-01-04 14:17:44', 1),
(19, 2, '2020-01-06 18:12:57', 1),
(20, 2, '2020-01-06 18:13:05', 1),
(21, 2, '2020-01-06 18:13:53', 1),
(22, 2, '2020-01-06 18:36:30', 1),
(23, 2, '2020-01-06 20:32:52', 1),
(24, 2, '2020-01-06 20:37:08', 1),
(25, 2, '2020-01-06 20:38:50', 1),
(26, 2, '2020-01-06 20:39:35', 1),
(27, 2, '2020-01-06 20:44:47', 1),
(28, 6, '2020-01-06 21:16:09', 1),
(29, 6, '2020-01-06 21:18:05', 1),
(30, 6, '2020-01-06 21:25:14', 1),
(31, 6, '2020-01-06 21:27:53', 1),
(32, 6, '2020-01-06 21:29:13', 1),
(33, 2, '2020-01-06 21:31:20', 1),
(34, 2, '2020-01-06 21:34:55', 1),
(35, 2, '2020-01-06 21:39:13', 1),
(36, 2, '2020-01-07 23:35:34', 1),
(37, 2, '2020-01-11 17:05:05', 0);

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
(9, 'Aros Snake', 'Aros en forma de serpientes', 1, 200, 52, 'https://instagram.faep5-1.fna.fbcdn.net/vp/a78a5248b668f73635b845c7f7cfc162/5E47EEA2/t51.2885-15/e35/75472274_1603994659752016_5148776086399024308_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=104'),
(10, 'Aros Frutitas', 'Aros en forma de frutas miniatura', 1, 250, 42, 'https://instagram.faep5-1.fna.fbcdn.net/vp/e5c0e2a54744ea53545916d0caf18f93/5E54F561/t51.2885-15/sh0.08/e35/s640x640/72895211_2412297902139077_7803593493159452129_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=105'),
(11, 'Aros Cherry', 'Aros en forma de maxi cerezas', 1, 200, 14, 'https://instagram.faep5-1.fna.fbcdn.net/vp/bb731cbc57fd9d681b75fbae4fb2b0e3/5E56F9C9/t51.2885-15/e35/75349242_3827563410602427_3000509374932021474_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=103'),
(12, 'Moños Classic', 'Moños clásicos lisos', 2, 150, 12, 'https://instagram.faep5-1.fna.fbcdn.net/vp/af6f71fce10f50a9a2e1b4d1bead3ef0/5E4D590A/t51.2885-15/e35/69951466_420229931963667_5076026618851256287_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=103'),
(13, 'Moños Maxi Bordados', 'Moños XL bordados a mano', 2, 350, 11, 'https://instagram.faep5-1.fna.fbcdn.net/vp/c1b7e2ec7ac124dd768cd7de8dd95275/5E4F22B9/t51.2885-15/sh0.08/e35/s750x750/70850738_958794784475383_4894620667575320664_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=107'),
(14, 'Moños Bordados', 'Moños clásicos bordados a mano', 2, 280, 57, 'https://instagram.faep5-1.fna.fbcdn.net/vp/bb400b1475be008a3042641a9835067b/5E8404EA/t51.2885-15/sh0.08/e35/s640x640/72227188_927624124302864_8720856247187237430_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=100'),
(15, 'Chokers Sirena', 'Chokers iridiscentes con textura de escamas', 3, 450, 52, 'https://instagram.faep5-1.fna.fbcdn.net/vp/6e970c5da33c4cefa2a08327ea6c7d0d/5E506B66/t51.2885-15/e35/74986315_2319979738112087_195059078141706566_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_cat=111'),
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
  `permisos_u` tinyint(1) DEFAULT NULL,
  `foto_u` varchar(600) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_u`, `nombre_u`, `apellido_u`, `password_u`, `fecha_registro_u`, `usuario_u`, `permisos_u`, `foto_u`) VALUES
(1, 'Valeria', 'Mitchell', 'toga2000', '2019-11-27 01:25:37', 'valemescudero@gmail.com', 1, 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/p720x720/66376871_10206836607671081_7521718333620617216_o.jpg?_nc_cat=104&_nc_ohc=KD8NvATcdZMAQlmsHmnsZWWcHzEfEgb76yJ4yf21qZJD_-18eI-bsVUSw&_nc_ht=scontent.faep5-1.fna&oh=9703eee0db7df7ec960d07dbbb3d68d6&oe=5E9CBB7C'),
(2, 'Sebastian', 'Otero', 'maxpower', '2019-11-27 20:23:24', 'sebastianmotero92@gmail.com', 0, 'https://scontent.faep5-1.fna.fbcdn.net/v/t31.0-8/p960x960/15625636_1820078208238900_8714013419403195299_o.jpg?_nc_cat=111&_nc_ohc=LW1SYJ3FmDwAQl7Nm_O0me3rfh4Pr4eUbtQ8FBSe9rhRhxWsqIMe2DAig&_nc_ht=scontent.faep5-1.fna&oh=3d08745493e47f5b636b53c128192e9a&oe=5E9343EF'),
(6, 'Augusto', 'Sandino', 'ortiz277', '2019-12-13 01:40:21', 'ccsandino@gmail.com', NULL, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id_b`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_c`);

--
-- Indices de la tabla `detallecompra`
--
ALTER TABLE `detallecompra`
  ADD KEY `ido_d` (`ido_d`),
  ADD KEY `idp_d` (`idp_d`);

--
-- Indices de la tabla `ordencompra`
--
ALTER TABLE `ordencompra`
  ADD PRIMARY KEY (`id_o`),
  ADD KEY `idu_o` (`idu_o`);

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
-- AUTO_INCREMENT de la tabla `blog`
--
ALTER TABLE `blog`
  MODIFY `id_b` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `ordencompra`
--
ALTER TABLE `ordencompra`
  MODIFY `id_o` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detallecompra`
--
ALTER TABLE `detallecompra`
  ADD CONSTRAINT `detallecompra_ibfk_1` FOREIGN KEY (`ido_d`) REFERENCES `ordencompra` (`id_o`),
  ADD CONSTRAINT `detallecompra_ibfk_2` FOREIGN KEY (`idp_d`) REFERENCES `productos` (`id_p`);

--
-- Filtros para la tabla `ordencompra`
--
ALTER TABLE `ordencompra`
  ADD CONSTRAINT `ordencompra_ibfk_1` FOREIGN KEY (`idu_o`) REFERENCES `usuarios` (`id_u`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`categoria_p`) REFERENCES `categorias` (`id_c`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
