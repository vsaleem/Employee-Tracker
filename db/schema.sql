DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id DECIMAL(10,0),
    manager_id INT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee_role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary VARCHAR(10),
    department_id INT,
    PRIMARY KEY(id)
);

