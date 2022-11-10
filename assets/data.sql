DROP DATABASE IF EXISTS `employee_tracker_DB`;
CREATE DATABASE `employee_tracker_DB`;
USE `employee_tracker_DB`;

CREATE TABLE IF NOT EXISTS `department` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30),
    PRIMARY KEY(`id`)
);

