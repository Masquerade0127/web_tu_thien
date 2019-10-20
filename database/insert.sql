USE web_tu_thien;

insert into ADMIN values ('A1', 'admin 1', '12345', 'admin1@gmail.com');
insert into ADMIN values ('A2', 'admin 2', '12345', 'admin2@gmail.com');
insert into ADMIN values ('A3', 'admin 3', '12345', 'admin3@gmail.com');
insert into ADMIN values ('A4', 'admin 4', '12345', 'admin4@gmail.com');
insert into ADMIN values ('A5', 'admin 5', '12345', 'admin5@gmail.com');

insert into USER values ('U1', 'user 1', '12345', 'user1@gmail.com');
insert into USER values ('U2', 'user 2', '12345', 'user2@gmail.com');
insert into USER values ('U3', 'user 3', '12345', 'user3@gmail.com');
insert into USER values ('U4', 'user 4', '12345', 'user4@gmail.com');
insert into USER values ('U5', 'user 5', '12345', 'user5@gmail.com');

insert into PACKAGE values ('P1', '1', '2017-01-01', '2017-02-02');
insert into PACKAGE values ('P2', '2', '2017-01-01', '2017-02-02');
insert into PACKAGE values ('P3', '3', '2017-01-01', '2017-02-02');
insert into PACKAGE values ('P4', '4', '2017-01-01', '2017-02-02');
insert into PACKAGE values ('P5', '5', '2017-01-01', '2017-02-02');

insert into LISTENING values ('L1', 'P1', '2017-01-01', '2017-02-02');
insert into LISTENING values ('L2', 'P1', '2017-01-01', '2017-02-02');
insert into LISTENING values ('L3', 'P1', '2017-01-01', '2017-02-02');
insert into LISTENING values ('L4', 'P1', '2017-01-01', '2017-02-02');
insert into LISTENING values ('L5', 'P1', '2017-01-01', '2017-02-02');

insert into QUESTION values ('Q1', 'P1', 'A1', 'what is your name', 'demo\url', '2017-01-01', '2017-02-02');
insert into QUESTION values ('Q2', 'P1', 'A1', 'what is your name', 'demo\url', '2017-01-01', '2017-02-02');
insert into QUESTION values ('Q3', 'P1', 'A1', 'what is your name', 'demo\url', '2017-01-01', '2017-02-02');
insert into QUESTION values ('Q4', 'P1', 'A1', 'what is your name', 'demo\url', '2017-01-01', '2017-02-02');
insert into QUESTION values ('Q5', 'P1', 'A1', 'what is your name', 'demo\url', '2017-01-01', '2017-02-02');

insert into GRAMMAR values ('G1', 'P1', 'demo content', 'demo\urlmp3', 'demo\urlimg', '2017-01-01', '2017-02-02');
insert into GRAMMAR values ('Q2', 'P1', 'demo content', 'demo\urlmp3', 'demo\urlimg', '2017-01-01', '2017-02-02');
insert into GRAMMAR values ('G3', 'P1', 'demo content', 'demo\urlmp3', 'demo\urlimg', '2017-01-01', '2017-02-02');
insert into GRAMMAR values ('G4', 'P1', 'demo content' 'demo\urlmp3', 'demo\urlimg', '2017-01-01', '2017-02-02');
insert into GRAMMAR values ('G5', 'P1', 'demo content', 'demo\urlmp3', 'demo\urlimg', '2017-01-01', '2017-02-02');

insert into ANSWER values ('AS1', 'Q1', 'A1', 'tên bạn là gì', '2017-01-01', '2017-02-02');
insert into ANSWER values ('AS2', 'Q2', 'A1', 'tên bạn là gì', '2017-01-01', '2017-02-02');
insert into ANSWER values ('AS3', 'Q3', 'A1', 'tên bạn là gì', '2017-01-01', '2017-02-02');
insert into ANSWER values ('AS4', 'Q4', 'A1', 'tên bạn là gì', '2017-01-01', '2017-02-02');
insert into ANSWER values ('AS5', 'Q5', 'A1', 'tên bạn là gì', '2017-01-01', '2017-02-02');