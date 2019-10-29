
use web_tu_thien;

insert into USER(User_name, Password)
values ('quethongdat', 'dat@123');
insert into USER(User_name, Password)
values ('thichchannguyen', 'nguyen@123');
insert into USER(User_name, Password)
values ('thantichthien', 'thien@123');
insert into USER(User_name, Password)
values ('thichtamquang', 'quang@123');
insert into USER(User_name, Password)
values ('suhuynh', 'huynh@123');

insert into PACKAGE(Name, Created, Modified)
values ('Package_1', '2019-02-02', '2019-03-03');
insert into PACKAGE(Name, Created, Modified)
values ('Package_2', '2019-02-03', '2019-02-05');
insert into PACKAGE(Name, Created, Modified)
values ('Package_3', '2019-02-05', '2019-02-07');
insert into PACKAGE(Name, Created, Modified)
values ('Package_4', '2019-10-05', '2019-10-07');
insert into PACKAGE(Name, Created, Modified)
values ('Package_5', '2019-11-05','2019-10-07');

insert into ADMIN(User_name, Password, Email)
values ('nguyenvana', 'a@123', 'a@gmail.com');
insert into ADMIN(User_name, Password, Email)
values ('nguyenvanb', 'b@123', 'b@gmail.com');
insert into ADMIN(User_name, Password, Email)
values ('nguyenvanc', 'c@123', 'c@gmail.com');
insert into ADMIN(User_name, Password, Email)
values ('nguyenvand', 'd@123', 'd@gmail.com');
insert into ADMIN(User_name, Password, Email)
values ('nguyenvane', 'e@123', 'e@gmail.com');

insert into QUESTION(ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values (1, 1, N'Bạn tên là gì?', '', '2019-02-02', '2019-03-03');
insert into QUESTION(ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values (2, 2, N'Bạn bao nhiêu tuôi?', '', '2019-02-03', '2019-02-05');
insert into QUESTION(ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values (3, 3, N'Bạn khỏe không?', '', '2019-02-05', '2019-02-07');
insert into QUESTION(ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values (4, 4, N'Đó là ai vâỵ?', '', '2019-10-05', '2019-10-07');
insert into QUESTION(ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values (5, 5, N'Tôi là môt học sinh', '', '2019-11-05','2019-11-07');

insert into LISTENING(ID_package, English, Url_mp3, Created, Modified)
values (1, 'What is your name?', '', '2019-02-02', '2019-03-03');
insert into LISTENING(ID_package, English, Url_mp3, Created, Modified)
values (2, 'How old are you?', '', '2019-02-03', '2019-02-05'); 
insert into LISTENING(ID_package, English, Url_mp3, Created, Modified)
values (3, 'How are you?', '', '2019-02-05', '2019-02-07');
insert into LISTENING(ID_package, English, Url_mp3, Created, Modified)
values (4, 'Who is this?', '', '2019-10-05', '2019-10-07');
insert into LISTENING(ID_package, English, Url_mp3, Created, Modified)
values (5, 'I am a student', '', '2019-11-05', '2019-10-07');


insert into GRAMMAR(ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values (1, 'S + am/is/are + Vo', '', '', '2019-02-02', '2019-03-03');
insert into GRAMMAR(ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values (2, 'S + was/were + V2/ed', '', '', '2019-02-03', '2019-02-05');
insert into GRAMMAR(ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values (3, 'S + am/is/are + Ving', '', '', '2019-02-05', '2019-02-07');
insert into GRAMMAR(ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values (4, 'S + was/were + Ving', '', '', '2019-10-05', '2019-10-07' );
insert into GRAMMAR(ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values (5, 'S + has/have + V3/ed', '', '', '2019-11-05','2019-11-07');

insert into ANSWER(ID_question, ID_admin, Content, Created, Modified)
values (1, 'AD_01', N'Bạn tên gỉ?', '2019-02-02', '2019-03-03');
insert into ANSWER(ID_question, ID_admin, Content, Created, Modified)
values (2, 'AD_02', N'Bạn bao nhiêu tuổi?', '2019-02-03', '2019-02-05');
insert into ANSWER(ID_question, ID_admin, Content, Created, Modified)
values (3, 'AD_03', N'Bạn khỏe không', '2019-02-05', '2019-02-07');
insert into ANSWER(ID_question, ID_admin, Content, Created, Modified)
values (4, 'AD_04', N'Đó là ai vâỵ?', '2019-10-05', '2019-10-07');
insert into ANSWER(ID_question, ID_admin, Content, Created, Modified)
values (5, 'AD_05', N'Bạn tên gỉ?', '2019-11-05', '2019-11-07');

