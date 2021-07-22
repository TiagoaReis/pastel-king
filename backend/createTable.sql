CREATE TABLE `dbpastel`.`user` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userID`)
);

INSERT INTO `dbpastel`.`user`(`name`,`email`,`password`,`admin`)VALUES('Admin','teste@gmail', 'teste1230', 1);

CREATE TABLE `dbpastel`.`task` (
  `taskID` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `date_limit` date DEFAULT NULL,
  `from` varchar(45) DEFAULT NULL,
  `to` varchar(45) DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`taskID`)
);

INSERT INTO `dbpastel`.`task`(`description`,`date_limit`, `from`, `to`, `status`)VALUES('Executar atualização no servidor', '2021-7-16', 'admin', 'Funcionario1', 0);

CREATE TABLE `dbpastel`.`config_email` (
  `configID` INT NOT NULL AUTO_INCREMENT,
  `host` VARCHAR(45) NULL,
  `port` VARCHAR(45) NULL,
  `user` VARCHAR(45) NULL,
  `pass` VARCHAR(45) NULL,
  `secure` VARCHAR(45) NULL,
  PRIMARY KEY (`configID`));

INSERT INTO `dbpastel`.`config_email` (`host`,`port`,`user`,`pass`,`secure`)VALUES('SMTP.office365.com','587', 'system_test@outlook.com.br', 'Test123456*','true');