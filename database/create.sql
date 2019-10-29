CREATE DATABASE web_tu_thien character set utf8 collate utf8_czech_ci;
USE web_tu_thien;

CREATE TABLE PACKAGE(
	ID char(10) Primary key AUTO_INCREMENT,
	Name char(20)  not null,
	Created datetime not null,
	Modified datetime not null
);

CREATE TABLE LISTENING(
	ID char(10) Primary key AUTO_INCREMENT,
	ID_package char(10) not null,
	English char(100)  not null,
	Url_mp3 char(5) not null,
	Created datetime not null,
	Modified datetime not null,
	FOREIGN KEY (ID_package) REFERENCES PACKAGE(ID)
);

CREATE TABLE ADMIN(
	ID char(10) Primary key AUTO_INCREMENT,
	User_name varchar(100) not null,
	Password char(20)  not null,
	Email char(20) null
);

CREATE TABLE QUESTION(
	ID char(10) Primary key AUTO_INCREMENT,
	ID_package char(10) not null,
	ID_admin char(10) not null,
	Content char(100) not null,
	Url_mp3 char(5) not null,
	Created datetime not null,
	Modified datetime not null,
	FOREIGN KEY (ID_package) REFERENCES PACKAGE(ID),
	FOREIGN KEY (ID_admin) REFERENCES ADMIN(ID)
);

CREATE TABLE GRAMMAR(
	ID char(10) Primary key AUTO_INCREMENT,
	ID_package char(10) not null,
	Content char(100) not null,
	Url_mp3 char(5) not null,
	Url_image char(5) not null,
	Created datetime not null,
	Modified datetime not null,
	FOREIGN KEY (ID_package) REFERENCES PACKAGE(ID)
);

CREATE TABLE ANSWER(
	ID char(10) Primary key AUTO_INCREMENT,
	ID_question char(10) not null,
	ID_admin char(10) not null,
	Content char(100) not null,
	Created datetime not null,
	Modified datetime not null,
	FOREIGN KEY (ID_question) REFERENCES QUESTION(ID),
	FOREIGN KEY (ID_admin) REFERENCES ADMIN(ID)
);

CREATE TABLE USER(
	ID char(10) Primary key AUTO_INCREMENT,
	User_name varchar(100) not null,
	Password char(20) not null,
	Email char(100) null
);


