CREATE DATABASE db_testing;
USE db_testing;

-- Creación de la primer tabla

CREATE TABLE category(
id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
description VARCHAR(255) NOT NULL,
title VARCHAR(255),
image_url VARCHAR(255)
);

-- insert de categorias
INSERT INTO category VALUES
(1,"Las mejores casas encontralas en SleepAway","casas","https://grupo-04-bucket.s3.amazonaws.com/assets/categories/casa.png"),
(2,"Los mejores departamentos encontralos en SleepAway","departamentos","https://grupo-04-bucket.s3.amazonaws.com/assets/categories/departamento.png"),
(3,"Los mejores hostels encontralos en SleepAway","hostels","https://grupo-04-bucket.s3.amazonaws.com/assets/categories/hostal.png"),
(4,"Los mejores hoteles encontralos en SleepAway","hoteles","https://grupo-04-bucket.s3.amazonaws.com/assets/categories/hotel.png");

-- creacion de tabla caracteristicas
CREATE TABLE feature (
id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
name VARCHAR(100),
react_icon VARCHAR(100)
);


-- insert de features
INSERT INTO feature VALUES 
(1,"Wifi", "BsWifi2"),
(2,"Cocina", "MdKitchen"),
(3,"Estacionamiento gratuito", "AiFillCar"),
(4,"TV", "FiMonitor"),
(5,"Apto mascotas", "MdPets"),
(6,"Aire acondicionado", "TbWind"),
(7,"Pileta", "FaSwimmer"),
(8,"Restaurante", "MdRestaurant"),
(9,"Baños privados", "FaBath"),
(10,"Articulos de cuidado", "MdOutlineHealthAndSafety"),
(11,"Sirven Ramen", "MdRamenDining");

-- creacion de tabla ciudades
CREATE TABLE location(
id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
street VARCHAR(50),
number VARCHAR(15),
city VARCHAR(50),
province VARCHAR(50),
country VARCHAR(50)
);

-- insert de locations
INSERT INTO location VALUES
(1,"Camino Estancia Silva","S/N","Gualtallary","Mendoza","Argentina"),
(2,"Walter Dotzauer","456","Villa General Belgrano","Cordoba","Argentina"),
(3,"Paraguay","546","Puerto Iguazu","Misiones","Argentina"),
(4,"Avenida Siete Lagos","1000","Villa La Angostura","Neuquen","Argentina"),
(5,"Bernardo O´Higgins","759 B","Perito Moreno","Santa Cruz","Argentina"),
(6,"Mendoza","971","San Agustin del Valle Fertil","San Juan","Argentina"),
(7,"Gervacio Mendez","1905","Gualeguaychú","Entre Ríos","Argentina"),
(8,"Cazadores de los Andes Barrio Medalla Milagrosa","S/N","Humahuaca","Jujuy","Argentina");

-- Creacion de la tabla policy

CREATE TABLE policy (
    id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
    check_in VARCHAR(20),
    check_out VARCHAR(20),
    accepts_all_ages BIT,
    child_policy VARCHAR(100),
    extra_bed BIT,
    smoke_policy BIT,
    noise_policy BIT,
    security_and_health TEXT(500),
    cancellation_policy VARCHAR(255),
    only_cash BIT
);

-- Inserts de la tabla policy
INSERT INTO policy VALUES
(1,"15 a 0 hrs","0 a 10 hrs",1,"En esta propiedad, los niños de 3 años o más se consideran adultos",1,0,0,
"En respuesta al coronavirus, este alojamiento está aplicando medidas sanitarias y de seguridad adicionales.
A causa del coronavirus, este alojamiento está tomando medidas para garantizar la seguridad de los huéspedes y del personal. Por este motivo, algunos servicios y amenities pueden verse limitados o no estar disponibles.
Debido al coronavirus, el uso de tapabocas es obligatorio en todas las zonas comunes interiores","Las políticas de cancelación y de pago por adelantado pueden variar según el tipo de alojamiento. Ingresá las fechas de tu estadía y consulta las condiciones de la habitación seleccionada.",0),
(2,"13 a 0 hrs","0 a 15 hrs",1,"En esta propiedad, los niños de 12 años o más se consideran adultos",1,0,0,
"El establecimiento cuenta con caja de seguridad.
Alcohol en gel disponible en el alojamiento y las principales zonas","Las políticas de cancelación y de pago por adelantado pueden variar según el tipo de alojamiento. Ingresá las fechas de tu estadía y consulta las condiciones de la habitación seleccionada.",1),
(3,"13 a 0 hrs","0 a 15 hrs",1,"En esta propiedad, los niños de 12 años o más se consideran adultos",1,0,0,
"Equipamiento de seguridad
El personal cumple con todos los protocolos de seguridad establecidos por las autoridades locales
Se eliminó el uso de ítems compartidos, como menús impresos, revistas, lapiceras y papel
Alcohol en gel disponible en el alojamiento y las principales zonas","Las políticas de cancelación y de pago por adelantado pueden variar según el tipo de alojamiento. Ingresá las fechas de tu estadía y consulta las condiciones de la habitación seleccionada.",0),
(4,"14 a 21 hrs","10:30 a 11 hrs",1,"En esta propiedad, los niños de 3 años o más se consideran adultos",0,0,0,
"El personal cumple con todos los protocolos de seguridad establecidos por las autoridades locales
Alcohol en gel disponible en la habitacion y las zonas compartidas","Las políticas de cancelación y de pago por adelantado pueden variar según el tipo de alojamiento. Ingresá las fechas de tu estadía y consulta las condiciones de la habitación seleccionada.",0),
(5,"14 a 0 hrs","06 a 12 hrs",1,"En esta propiedad, los niños de 15 años o más se consideran adultos",0,1,1,
"El departamento cuenta con extintores y detectores de humo","Las políticas de cancelación y de pago por adelantado pueden variar según el tipo de alojamiento. Ingresá las fechas de tu estadía y consulta las condiciones de la habitación seleccionada.",0),
(6,"12 a 23:30 hrs","10 a 10:30 hrs",1,"En esta propiedad, los niños de 12 años o más se consideran adultos",1,0,0,
"El establecimiento cumple con todas la normas de seguridas establecidas por la ley.
El hostel cuenta con la puesta en marcha de todas las condiciones sanitarias y preventivas impuestas de COVID 19","Las políticas de cancelación y de pago por adelantado pueden variar según el tipo de alojamiento. Ingresá las fechas de tu estadía y consulta las condiciones de la habitación seleccionada.",0),
(7,"12 a 18 hrs","07 a 10 hrs",1,"En esta propiedad, los niños de 5 años o más se consideran adultos",0,0,1,
"El edificio cuenta con todas las normas de seguridad preventivas, tambien detectores de humo y sistema de extintores en todos los departamentos","Las políticas de cancelación y de pago por adelantado pueden variar según el tipo de alojamiento. Ingresá las fechas de tu estadía y consulta las condiciones de la habitación seleccionada.",1),
(8,"14 a 22 hrs","07 a 11 hrs",1,"En esta propiedad, los niños de 12 años o más se consideran adultos",0,1,1,
"La casa cuenta con botiquin de primeros auxilios.
Propiedad con alarma integrada","Las políticas de cancelación y de pago por adelantado pueden variar según el tipo de alojamiento. Ingresá las fechas de tu estadía y consulta las condiciones de la habitación seleccionada.",1);

-- Creacion de la tabla producto

CREATE TABLE product (
id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
name VARCHAR(50),
description TEXT(1000),
policy_id BIGINT,
latitude DOUBLE,
longitude Double,
location_id BIGINT,
category_id BIGINT,
CONSTRAINT product_location_id_foreign FOREIGN KEY (location_id) REFERENCES location (id),
CONSTRAINT product_policy_id_foreign FOREIGN KEY (policy_id) REFERENCES policy (id),
CONSTRAINT product_category_id_foreign FOREIGN KEY (category_id) REFERENCES category (id)
);
-- inserts de productos
INSERT INTO product VALUES
(1,"Huentala Wines","En Mendoza, Tupungato, se encuentra la zona de Gualtallary; un verdadero paraíso natural al pie de la Cordillera de Los Andes, un hotel de lujo, lodge de dos habitaciones deluxe para poder disfrutar de la paz que ofrece un lugar único a los pies del Volcán Tupungato. 
HUENTALA WINES posee un terreno de 230 hectáreas de viñedos, habitaciones de lujo con todas las comodidades y rodeadas de un paisaje mágico, restaurante y salón de usos múltiples para eventos sociales y corporativos.
Cuenta con un resto exclusivo, donde se puede acceder cualquier día de la semana con reserva previa. En ese resto se ofrece un menú regional basado principalmente en las cocciones a los fuegos (llama, parrilla, horno de barro) y se pueden degustar los mejores vinos del Valle de Uco",1,-33.397371564535085,-69.24993447286762,1,4),
(2,"Sonnen Haus","El Sonnen Haus se encuentra en Villa General Belgrano y ofrece alojamiento con pileta privada, vistas a la montaña y patio. El alojamiento se encuentra a 4,1 km del parque cervecero de Villa General Belgrano y ofrece aire acondicionado, estacionamiento privado y wifi gratis.
Esta casa tiene 2 dormitorios, 2 baños, TV de pantalla plana con canales por cable y reproductor de DVD.
La casa cuenta con pileta al aire libre.
El aeropuerto internacional Ingeniero Aeronáutico Ambrosio L.V. Taravella es el más cercano y queda a 78 km del Sonnen Haus.",2,-31.951862369106202,-64.5520638452478,2,1),
(3,"Hotel Iguazu","El O2 Hotel Iguazu está ubicado en Puerto Iguazú, a 2,5 km del Casino Iguazú, y ofrece alojamiento, restaurante, estacionamiento privado gratuito, centro de fitness y bar. Este hotel de 4 estrellas cuenta con servicio de conserjería y consigna de equipaje. Hay recepción 24 horas, room service y servicio de organización de excursiones.
Las habitaciones del hotel disponen de aire acondicionado, escritorio, caja fuerte, TV de pantalla plana y baño privado con bidet. Todas las habitaciones del O2 Hotel Iguazu incluyen ropa de cama y toallas.
Por la mañana se sirve un desayuno a la carta.
El O2 Hotel Iguazu alberga un centro de spa y bienestar con bañera de hidromasaje y sauna.
Este hotel se halla a 3,4 km de la tienda libre de impuestos de Puerto Iguazú y a 24 km de las cataratas del Iguazú. El aeropuerto internacional Cataratas del Iguazú, situado a 18 km del O2 Hotel Iguazu, es el más cercano.
Nuestros clientes dicen que esta parte de Puerto Iguazú es su favorita, según los comentarios independientes.",3,-25.594131683972872,-54.5749299620277,3,4),
(4,"Hostería Las Cumbres","La Hostería Las Cumbres se encuentra a 900 metros del centro comercial de Villa La Angostura. Ofrece sala de estar con chimenea y habitaciones acogedoras con vistas al jardín y a las montañas.
Las habitaciones de la Hostería Las Cumbres disponen de baño privado y TV por cable.
Las Cumbres sirve un desayuno continental que incluye mermeladas caseras. Proporciona wifi gratis, zona de parrilla, calefacción y servicio de alquiler de autos y bicicletas.
Ofrece información turística y está a 2 km del lago Correntoso y a 9 km del cerro Bayo. Facilita estacionamiento privado gratuito.",4,-40.754441968734874,-71.6577831060261,4,3),
(5,"Estación Libertad","La Estación Libertad se encuentra en Perito Moreno y ofrece alojamiento con terraza y wifi gratis. Este departamento cuenta con jardín y estacionamiento privado gratuito.
El departamento está equipado con 1 dormitorio, 1 baño, ropa de cama, toallas, TV de pantalla plana vía satélite, zona de comedor, cocina totalmente equipada y patio con vistas al jardín. El alojamiento proporciona toallas y ropa de cama por un adicional.
En las inmediaciones se puede pescar.
El aeropuerto Perito Moreno es el más cercano y queda a 7 km.",5,-46.58894149240723,-70.9231018152802,5,2),
(6,"Eco Hostel Valle Fertil","El Eco Hostel Valle Fertil, situado en San Agustín de Valle Fértil, alberga un bar y un salón compartido. El alojamiento cuenta con restaurante, recepción 24 horas, cocina compartida y wifi gratis en todas las instalaciones. El hostel dispone de habitaciones familiares.
Todos los días se sirve un desayuno continental en el hostel.",6,-30.633278207970037,-67.46841988947746,6,3),
(7,"Departamento Litoral 1 - Semicentrico","El Departamento Litoral 1 - Semicentrico se encuentra en Gualeguaychú. Este alojamiento ofrece acceso a un balcón.
El departamento incluye 2 dormitorios y cocina con heladera y horno. Se proporcionan toallas y ropa de cama.
El alojamiento alberga un jardín.
Termas de Gualeguaychu está a 5 km del departamento.",7,-33.013086716821235,-58.53458682169017,7,2),
(8,"Kenty Wasy","El Kenty Wasy Humahuaca se encuentra en Humahuaca y ofrece jardín y zona de parrilla. Se encuentra a 45 km de Tilcara y proporciona estacionamiento privado gratuito.
La casa cuenta con 3 dormitorios, 2 baños, ropa de cama, toallas, TV de pantalla plana, zona de comedor, cocina totalmente equipada y patio con vistas al jardín.
La casa está a 26 km de Huacalera y a 47 km de Valle Grande.",8,-23.203623468892797, -65.34271116273355,8,1);

-- Creacion de la tabla rating
CREATE TABLE rating (
id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
usuario_id BIGINT,
rating INT(5),
product_id BIGINT,
CONSTRAINT product_rating_id_foreign FOREIGN KEY (product_id) REFERENCES product (id)
);
-- insert de ratings
INSERT INTO rating VALUES
(1,1,4,1),(2,1,5,1),(3,2,3,2),(4,2,5,2),(5,3,4,3),(6,3,2,3),(7,4,3,4),(8,4,4,4),
(9,5,5,5),(10,5,4,5),(11,6,2,6),(12,6,3,6),(13,7,5,7),(14,7,4,7),(15,8,3,8),(16,8,5,8);
-- creacion de tabla imagenes

CREATE TABLE image (
id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
title VARCHAR (50),
url VARCHAR(255),
product_id BIGINT,
CONSTRAINT product_image_id_foreign FOREIGN KEY (product_id) REFERENCES product (id)
);

-- insert con imagenes para la tabla
INSERT INTO image VALUES
(1, "1_960x600.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/1/1_960x600.png", 1), 
(2, "2_960x600.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/1/2_960x600.png", 1), 
(3, "3_960x600.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/1/3_960x600.png", 1), 
(4, "4_960x600.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/1/4_960x600.png", 1), 
(5, "5_960x600.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/1/5_960x600.png", 1), 
(6, "1_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/2/1_1024x768.png", 2), 
(7, "2_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/2/2_1024x768.png", 2), 
(8, "3_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/2/3_1024x768.png", 2), 
(9, "4_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/2/4_1024x768.png", 2), 
(10, "5_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/2/5_1024x768.png", 2), 
(11, "1_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/3/1_1024x768.png", 3), 
(12, "2_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/3/2_1024x768.png", 3), 
(13, "3_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/3/3_1024x768.png", 3), 
(14, "4_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/3/4_1024x768.png", 3), 
(15, "5_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/3/5_1024x768.png", 3), 
(16, "1_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/4/1_1024x768.png", 4), 
(17, "2_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/4/2_1024x768.png", 4), 
(18, "3_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/4/3_1024x768.png", 4), 
(19, "4_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/4/4_1024x768.png", 4), 
(20, "5_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/4/5_1024x768.png", 4), 
(21, "1_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/5/1_1024x768.png", 6), 
(22, "2_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/5/2_1024x768.png", 6), 
(23, "3_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/5/3_1024x768.png", 6), 
(24, "4_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/5/4_1024x768.png", 6), 
(25, "5_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/5/5_1024x768.png", 6), 
(26, "1_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/6/1_1024x768.png", 5), 
(27, "2_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/6/2_1024x768.png", 5), 
(28, "3_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/6/3_1024x768.png", 5), 
(29, "4_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/6/4_1024x768.png", 5), 
(30, "5_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/6/5_1024x768.png", 5), 
(31, "1_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/7/1_1024x768.png", 7), 
(32, "2_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/7/2_1024x768.png", 7), 
(33, "3_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/7/3_1024x768.png", 7), 
(34, "4_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/7/4_1024x768.png", 7), 
(35, "5_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/7/5_1024x768.png", 7), 
(36, "1_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/8/1_1024x768.png", 8), 
(37, "2_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/8/2_1024x768.png", 8), 
(38, "3_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/8/3_1024x768.png", 8), 
(39, "4_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/8/4_1024x768.png", 8), 
(40, "5_1024x768.png", "https://grupo-04-bucket.s3.amazonaws.com/categories/hotels/8/5_1024x768.png", 8);

-- creacion de tabla roles
CREATE TABLE role (
id TINYINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
name VARCHAR (50)
);

INSERT INTO role VALUES
(1, "ROLE_ADMIN"),
(2, "ROLE_CLIENT");

-- creacion de tabla usuarios
CREATE TABLE user (
id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
name VARCHAR (50),
last_name VARCHAR (50),
email VARCHAR (60),
password VARCHAR (100),
city VARCHAR (50),
role_id TINYINT,
CONSTRAINT role_user_id_foreing FOREIGN KEY (role_id) REFERENCES role (id)
);

-- creacion de tabla reservas
CREATE TABLE booking (
id BIGINT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
booking_time VARCHAR(20),
booking_starting_date DATE,
booking_final_date DATE,
product_id BIGINT,
user_id BIGINT,
CONSTRAINT product_booking_id_foreing FOREIGN KEY (product_id) REFERENCES product (id),
CONSTRAINT user_booking_id_foreing FOREIGN KEY (user_id) REFERENCES user (id)
);


CREATE TABLE feature_has_product (
product_id BIGINT NOT NULL,
feature_id BIGINT NOT NULL,
PRIMARY KEY (product_id, feature_id),
INDEX(feature_id, product_id),
CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product (id),
CONSTRAINT fk_feature_id FOREIGN KEY (feature_id) REFERENCES feature (id)
) ENGINE=InnoDB;


INSERT INTO feature_has_product VALUES
(1,1),(1,3),(1,6),(1,8),(1,9),(1,10),
(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,9),
(3,1),(3,3),(3,4),(3,6),(3,7),(3,8),(3,9),
(4,1),(4,3),(4,5),(4,6),(4,8),(4,9),(4,10),
(5,1),(5,2),(5,4),(5,6),(5,9),(5,10),
(6,1),(6,2),(6,4),(6,5),(6,6),(6,7),(6,8),(6,9),(6,10),
(7,1),(7,2),(7,4),(7,5),(7,6),(7,9),
(8,1),(8,2),(8,3),(8,4),(8,5),(8,6),(8,9),(8,10);


CREATE TABLE IF NOT EXISTS review (
review_id BIGINT NOT NULL AUTO_INCREMENT,
comment VARCHAR(255) NULL DEFAULT NULL,
product_id BIGINT NULL DEFAULT NULL,
user_id BIGINT NULL DEFAULT NULL,
PRIMARY KEY (review_id),
CONSTRAINT review_product_id_foreign
    FOREIGN KEY (product_id)
    REFERENCES product (id),
CONSTRAINT review_user_id_foreign
    FOREIGN KEY (user_id)
    REFERENCES user (id))
ENGINE = InnoDB;

