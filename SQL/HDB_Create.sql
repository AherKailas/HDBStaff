
CREATE TABLE users(id int PRIMARY KEY,name VARCHAR(25),contact VARCHAR(15),address VARCHAR(25),username VARCHAR(20) UNIQUE,password VARCHAR(15),gender VARCHAR(10));
INSERT INTO users VALUES(1,'Ramchandra','7654342398','Rammandir','Ram2233','567','Male');