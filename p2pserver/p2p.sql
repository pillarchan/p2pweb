drop database if exists p2p;
create database p2p character set utf8;
use p2p;
create table user (
    id int primary key auto_increment comment "用户id",
    username varchar(50) not null comment "用户名",
    pwd varchar(32) not null comment "密码",
    phone bigint comment "手机",
    create_time timestamp default current_timestamp
);
insert into user (username,pwd,phone) values ('test','test','12345678987');
select * from user;