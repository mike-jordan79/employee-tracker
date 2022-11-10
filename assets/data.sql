DROP DATABASE IF EXISTS `employee_tracker_DB`;
CREATE DATABASE `employee_tracker_DB`;
USE `employee_tracker_DB`;

CREATE TABLE IF NOT EXISTS `department` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30),
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS role (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(30),
    `salary` DECIMAL,
    `department_id` int,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`department_id`) REFERENCES `department`(`id`)
);

CREATE TABLE IF NOT EXISTS `employee` (
    `id` int NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(30),
    `last_name` VARCHAR(30),
    `role_id` int,
    `manager_id` int ,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`role_id`) REFERENCES role(`id`),
    FOREIGN KEY (`manager_id`) REFERENCES `employee`(`id`)
);