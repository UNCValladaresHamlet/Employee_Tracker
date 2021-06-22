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

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT, --
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  manager_id INT NULL,
  CONSTRAINT fk_employee FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);


