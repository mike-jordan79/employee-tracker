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

-- Insert some data into tables

INSERT INTO `department` (`name`) VALUES('Software Engineering');
INSERT INTO `department` (`name`) VALUES('Sales');
INSERT INTO `department` (`name`) VALUES('Marketing');
INSERT INTO `department` (`name`) VALUES('Human Resources');
INSERT INTO `department` (`name`) VALUES('Accounting');

INSERT INTO `role` (`title`,`salary`,`department_id`) VALUES('Frontend Developer',  100000, 1);
INSERT INTO `role` (`title`,`salary`,`department_id`) VALUES('FullStack',  110000, 1);
INSERT INTO `role` (`title`,`salary`,`department_id`) VALUES('Sales Executive',  95000, 2);
INSERT INTO `role` (`title`,`salary`,`department_id`) VALUES('Accountant',  90000, 5);

INSERT INTO `employee` (`first_name`,`last_name`,`role_id`,`manager_id`) VALUES('Pat','Smith',1,null);
INSERT INTO `employee` (`first_name`,`last_name`,`role_id`,`manager_id`) VALUES('Susan','Glass',2,null);
INSERT INTO `employee` (`first_name`,`last_name`,`role_id`,`manager_id`) VALUES('Jon','Lee',1,1);
INSERT INTO `employee` (`first_name`,`last_name`,`role_id`,`manager_id`) VALUES('Sam','Walker',2,2);

