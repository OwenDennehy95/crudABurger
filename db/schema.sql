DROP DATABASE IF EXISTS burgerDB;
CREATE DATABASE burgerDB;
USE burgerDB;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);

INSERT INTO burgers(burger_name, devoured) VALUES ("Cheese Burger", false);
INSERT INTO burgers(burger_name, devoured) VALUES ("Fake Burger", true);
INSERT INTO burgers(burger_name, devoured) VALUES ("Beef Burger", false);
INSERT INTO burgers(burger_name, devoured) VALUES ("Bison Burger", false);
INSERT INTO burgers(burger_name, devoured) VALUES ("BLT Burger", true);
INSERT INTO burgers(burger_name, devoured) VALUES ("Veggie Burger", false);
INSERT INTO burgers(burger_name, devoured) VALUES ("Angus Burger", true);

SELECT * FROM burgers;