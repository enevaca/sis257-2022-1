-- Demo Base de Datos MySQL SIS257
CREATE DATABASE sis257_canciones;

DROP TABLE IF EXISTS canciones;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS generos;
DROP TABLE IF EXISTS interpretes;

CREATE TABLE interpretes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  nacionalidad VARCHAR(50) NULL
);
CREATE TABLE generos (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  descripcion VARCHAR(100) NOT NULL
);
CREATE TABLE albums (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_interprete INT NOT NULL,
  nombre VARCHAR(120) NOT NULL,
  fecha_lanzamiento DATE NOT NULL,
  CONSTRAINT fk_albums_interpretes FOREIGN KEY (id_interprete) REFERENCES interpretes(id)
);
CREATE TABLE canciones (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_album INT NOT NULL,
  id_genero INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  duracion TIMESTAMP NOT NULL,
  tags VARCHAR(80) NOT NULL,
  url VARCHAR(500) NOT NULL,
  CONSTRAINT fk_canciones_albums FOREIGN KEY (id_album) REFERENCES albums(id),
  CONSTRAINT fk_canciones_generos FOREIGN KEY (id_genero) REFERENCES generos(id)
);
CREATE TABLE usuarios (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  usuario VARCHAR(10) NOT NULL,
  clave VARCHAR(120) NOT NULL,
  email VARCHAR(60) NOT NULL,
  rol VARCHAR(20) NOT NULL,
  premium BOOLEAN NOT NULL DEFAULT false
);
-- listas_reproduccion (id, nombre, id_usuario)
-- listas_canciones (id, id_lista_reproduccion, id_cancion, fecha)

