-- Creación de la base de datos
CREATE DATABASE db_sleepaway;
USE db_sleepaway;
-- Creación de la primer tabla
CREATE TABLE category(
id BIGINT NOT NULL AUTO_INCREMENT,
description VARCHAR(255) NOT NULL,
title VARCHAR(255),
image_url VARCHAR(255),
PRIMARY KEY(id)
);
