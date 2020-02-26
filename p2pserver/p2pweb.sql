-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: p2p
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
DROP DATABASE IF EXISTS p2p;
Create DATABASE p2p;
USE p2p;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `borrow`
--

DROP TABLE IF EXISTS `borrow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `borrow` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `borrowmoney` int(11) NOT NULL COMMENT '借款金额',
  `interest` float NOT NULL COMMENT '利息',
  `minbid` int(11) NOT NULL COMMENT '最小投标',
  `days` int(11) NOT NULL COMMENT '招标天数',
  `title` varchar(100) NOT NULL COMMENT '借款标题',
  `info` varchar(200) NOT NULL COMMENT '借款描述',
  `borrowtime` int(11) NOT NULL COMMENT '借款期限（单位：月）',
  `repaytype` int(11) NOT NULL COMMENT '还款方式，0，按月，1，到期累计',
  `bonus` float NOT NULL,
  `investmoney` int(11) DEFAULT NULL COMMENT '投资金额',
  `userid` int(11) NOT NULL COMMENT '用户id，用于外联user表',
  PRIMARY KEY (`id`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `borrow`
--

LOCK TABLES `borrow` WRITE;
/*!40000 ALTER TABLE `borrow` DISABLE KEYS */;
INSERT INTO `borrow` VALUES (7,200000,10,10000,30,'借钱 搞个项目','借钱 搞个项目借钱 搞个项目借钱 搞个项目借钱 搞个项目借钱 搞个项目借钱 搞个项目',12,0,1,105000,1),(8,100000,9,10000,7,'2020重在参与','2020重在参与2020重在参与2020重在参与2020重在参与2020重在参与2020重在参与',6,0,2,NULL,1),(9,200000,10,20000,30,'震惊！要搞项目了1','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(10,200000,10,20000,30,'震惊！要搞项目了2','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(11,200000,10,20000,30,'震惊！要搞项目了3','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(12,200000,10,20000,30,'震惊！要搞项目了4','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(13,200000,10,20000,30,'震惊！要搞项目了5','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(14,200000,10,20000,30,'震惊！要搞项目了6','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(15,200000,10,20000,30,'震惊！要搞项目了7','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(16,200000,10,20000,30,'震惊！要搞项目了8','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(17,200000,10,20000,30,'震惊！要搞项目了9','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(18,200000,10,20000,30,'震惊！要搞项目了10','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(19,200000,10,20000,30,'震惊！要搞项目了11','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1),(20,200000,10,20000,30,'震惊！要搞项目了12','震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了震惊！要搞项目了',24,0,2,NULL,1);
/*!40000 ALTER TABLE `borrow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `pwd` varchar(20) NOT NULL COMMENT '密码',
  `phone` bigint(15) DEFAULT NULL COMMENT '手机',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册日期',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `nickname` varchar(40) DEFAULT NULL COMMENT '昵称',
  `total_money` bigint(20) DEFAULT '0' COMMENT '总金额',
  `useful_money` bigint(50) DEFAULT '0' COMMENT '可用金额',
  `freezed_money` bigint(50) DEFAULT '0' COMMENT '冻结金额',
  `lastlogintime` datetime NOT NULL COMMENT '最后一次登录时间',
  `audit` tinyint(1) NOT NULL COMMENT '是否审核',
  `education` varchar(10) DEFAULT NULL,
  `income` int(11) DEFAULT '0' COMMENT '收入',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nickname_UNIQUE` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test','123',18912345678,'2020-02-20 09:29:49','123@qq.com','我是测试2',101000,81000,20000,'2020-02-23 11:50:39',0,'博士',NULL),(2,'boss','321',18988889999,'2020-02-25 06:48:21','boss@qq.com','就是个老板',122000,7000,115000,'2020-02-25 23:00:02',0,'其它',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-25 23:04:21
