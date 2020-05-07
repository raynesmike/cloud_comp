CREATE DATABASE IF NOT EXISTS test;
USE test;
CREATE TABLE sample_data (
    id INT NOT NULL AUTO_INCREMENT,
    age INT NOT NULL,
    weight_kg_current DECIMAL(10 , 2 ) NOT NULL,
    weight_kg_2019 DECIMAL(10 , 2 ) NOT NULL,
	weight_kg_2018 DECIMAL(10 , 2 ) NOT NULL,
	height_cm INT NOT NULL,
	sex INT NOT NULL,
    PRIMARY KEY (id)
);