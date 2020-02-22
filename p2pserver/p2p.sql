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

ALTER TABLE `p2p`.`user` 
ADD COLUMN `email` VARCHAR(50) NULL DEFAULT NULL AFTER `create_time`,
ADD COLUMN `nickname` VARCHAR(45) NULL DEFAULT NULL COMMENT '昵称' AFTER `email`,
ADD COLUMN `total_money` BIGINT(20) NULL COMMENT '总金额' AFTER `nickname`,
ADD COLUMN `useful_money` BIGINT(50) NULL COMMENT '可用金额' AFTER `total_money`,
ADD COLUMN `freezed_mone` BIGINT(50) NULL COMMENT '冻结金额' AFTER `useful_money`,
ADD COLUMN `education` VARCHAR(10) NULL DEFAULT NULL COMMENT '学历' AFTER `freezed_mone`,
ADD COLUMN `income` INT NULL COMMENT '收入' AFTER `education`,
ADD COLUMN `auditno` TINYINT(1) NULL COMMENT '是否审核 0未审核 1已审核' AFTER `income`,
ADD COLUMN `lastlogintime` DATETIME NULL COMMENT '上次登录时间' AFTER `auditno`,
CHANGE COLUMN `create_time` `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间' ,
ADD UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE;
;
