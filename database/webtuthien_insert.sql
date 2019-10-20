
use web_tu_thien;

insert into USER(ID, User_name, Password)
values ('US_01', 'quethongdat', 'dat@123');
insert into USER(ID, User_name, Password)
values ('US_02', 'thichchannguyen', 'nguyen@123');
insert into USER(ID, User_name, Password)
values ('US_03', 'thantichthien', 'thien@123');
insert into USER(ID, User_name, Password)
values ('US_04', 'thichtamquang', 'quang@123');
insert into USER(ID, User_name, Password)
values ('US_05', 'suhuynh', 'huynh@123');

insert into PACKAGE(ID, Name, Created, Modified)
values ('PC_01', 'Package_1', '2019-02-02', '2019-03-03');
insert into PACKAGE(ID, Name, Created, Modified)
values ('PC_02', 'Package_2', '2019-02-03', '2019-02-05');
insert into PACKAGE(ID, Name, Created, Modified)
values ('PC_03', 'Package_3', '2019-02-05', '2019-02-07');
insert into PACKAGE(ID, Name, Created, Modified)
values ('PC_04', 'Package_4', '2019-10-05', '2019-10-07');
insert into PACKAGE(ID, Name, Created, Modified)
values ('PC_05', 'Package_5', '2019-11-05','2019-10-07');

insert into ADMIN(ID, User_name, Password, Email)
values ('AD_01', 'nguyenvana', 'a@123', 'a@gmail.com');
insert into ADMIN(ID, User_name, Password, Email)
values ('AD_02', 'nguyenvanb', 'b@123', 'b@gmail.com');
insert into ADMIN(ID, User_name, Password, Email)
values ('AD_03', 'nguyenvanc', 'c@123', 'c@gmail.com');
insert into ADMIN(ID, User_name, Password, Email)
values ('AD_04', 'nguyenvand', 'd@123', 'd@gmail.com');
insert into ADMIN(ID, User_name, Password, Email)
values ('AD_05', 'nguyenvane', 'e@123', 'e@gmail.com');

insert into QUESTION(ID, ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values ('QS_01', 'PC_01', 'AD_01', N'Bạn tên là gì?', '', '2019-02-02', '2019-03-03');
insert into QUESTION(ID, ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values ('QS_02', 'PC_02', 'AD_02', N'Bạn bao nhiêu tuôi?', '', '2019-02-03', '2019-02-05');
insert into QUESTION(ID, ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values ('QS_03', 'PC_03', 'AD_03', N'Bạn khỏe không?', '', '2019-02-05', '2019-02-07');
insert into QUESTION(ID, ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values ('QS_04', 'PC_04', 'AD_04', N'Đó là ai vâỵ?', '', '2019-10-05', '2019-10-07');
insert into QUESTION(ID, ID_package, ID_admin, Content, Url_mp3, Created, Modified)
values ('QS_05', 'PC_05', 'AD_05', N'Tôi là môt học sinh', '', '2019-11-05','2019-11-07');

insert into LISTENING(ID, ID_package, English, Url_mp3, Created, Modified)
values ('LS_01', 'PC_01', 'What is your name?', '', '2019-02-02', '2019-03-03');
insert into LISTENING(ID, ID_package, English, Url_mp3, Created, Modified)
values ('LS_02', 'PC_02', 'How old are you?', '', '2019-02-03', '2019-02-05'); 
insert into LISTENING(ID, ID_package, English, Url_mp3, Created, Modified)
values ('LS_03', 'PC_03', 'How are you?', '', '2019-02-05', '2019-02-07');
insert into LISTENING(ID, ID_package, English, Url_mp3, Created, Modified)
values ('LS_04', 'PC_04', 'Who is this?', '', '2019-10-05', '2019-10-07');
insert into LISTENING(ID, ID_package, English, Url_mp3, Created, Modified)
values ('LS_05', 'PC_05', 'I am a student', '', '2019-11-05', '2019-10-07');


insert into GRAMMER(ID, ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values ('GM_01', 'PC_01', 'S + am/is/are + Vo', '', '', '2019-02-02', '2019-03-03');
insert into GRAMMER(ID, ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values ('GM_02', 'PC_02', 'S + was/were + V2/ed', '', '', '2019-02-03', '2019-02-05');
insert into GRAMMER(ID, ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values ('GM_03', 'PC_03', 'S + am/is/are + Ving', '', '', '2019-02-05', '2019-02-07');
insert into GRAMMER(ID, ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values ('GM_04', 'PC_04', 'S + was/were + Ving', '', '', '2019-10-05', '2019-10-07' );
insert into GRAMMER(ID, ID_package, Content, Url_mp3, Url_image, Created, Modified)	
values ('GM_05', 'PC_05', 'S + has/have + V3/ed', '', '', '2019-11-05','2019-11-07');

insert into ANSWER(ID, ID_question, ID_admin, Content, Created, Modified)
values ('AS_01', 'QS_01', 'AD_01', N'Bạn tên gỉ?', '2019-02-02', '2019-03-03');
insert into ANSWER(ID, ID_question, ID_admin, Content, Created, Modified)
values ('AS_02', 'QS_02', 'AD_02', N'Bạn bao nhiêu tuổi?', '2019-02-03', '2019-02-05');
insert into ANSWER(ID, ID_question, ID_admin, Content, Created, Modified)
values ('AS_03', 'QS_03', 'AD_03', N'Bạn khỏe không', '2019-02-05', '2019-02-07');
insert into ANSWER(ID, ID_question, ID_admin, Content, Created, Modified)
values ('AS_04', 'QS_04', 'AD_04', N'Đó là ai vâỵ?', '2019-10-05', '2019-10-07');
insert into ANSWER(ID, ID_question, ID_admin, Content, Created, Modified)
values ('AS_05', 'QS_05', 'AD_05', N'Bạn tên gỉ?', '2019-11-05', '2019-11-07');

