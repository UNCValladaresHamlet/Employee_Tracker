--The DROP DATABASE statement is used to drop an   --existing SQL database.
DROP DATABASE IF EXISTS employee_DB; 

--The CREATE DATABASE statement is used to create a --new SQL database.
CREATE DATABASE employee_DB;

--Creating a database does not select it for use; you must do that explicitly. 
USE employee_DB;

--The CREATE TABLE statement is used to create a new table in a database.
--The column parameters specify the names of the columns of the table.
--The datatype parameter specifies the type of data the column can hold (ex: varchar, integer, date, etc.)
--If you create a new table using an existing table, the new table will be filled with the existing values from the old table.
--By default, a column can hold NULL values.The NOT NULL constraint enforces a column to NOT accept NULL values.
--The NOT NULL constraint enforces a column to NOT accept NULL values.--This enforces a field to always contain a value, which means that you cannot insert a new record, or update a record without adding a value to this field.
--DECIMAL(size, d),The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. 
--The PRIMARY KEY constraint uniquely identifies each record in a table.Primary keys must contain UNIQUE values and cannot contain NULL values.A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns.
--SQL constraints are used to specify rules for the data in a table.Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.

--The following constraints are commonly used in SQL: 
--NOT NULL - Ensures that a column cannot have a NULL value.
--UNIQUE - Ensures that all values in a column are different.
--PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table.
--FOREIGN KEY - Prevents actions that would destroy links between tables.
--DEFAULT - Sets a default value for a column if no value is specified.
--A foreign key with cascade delete means that if a record in the parent table is deleted, then the corresponding records in the child table will automatically be deleted. This is called a cascade delete in SQL Server.

DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT NULL,
PRIMARY KEY (id)
);


--Insert Values into tables
--Step by step
USE employee_DB; --step 1

INSERT INTO department(name)
VALUES ('Sales'),
('Engineering'),
('Legal');


USE employee_DB; --step 2

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

USE employee_DB; --step 3

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Jordan', 1, 2),
('Kobe', 'Bryant', 2, 1),
('Steve', 'Kerr', 3, 3),
('Hamlet', 'Valladares', 4, 2),
('Noah', 'King', 5, 3),
('Kiara', 'Lopez', 6, 4),
('Tom', 'Allen', 7, 5);

--If you want to select all the fields available in the table, 
--use the following syntax: SELECT * FROM table_name;

SELECT * FROM department; 
SELECT * FROM role;
SELECT * FROM employee;