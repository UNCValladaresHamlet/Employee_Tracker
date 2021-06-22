//You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?

//You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.
const mysql = require('mysql'); //App requires these modules to function. 
// const inquirer = require('inquirer');
// const cTable = require('console.table');

const connection = mysql.createConnection({ //create a connection to the MySQL database by calling the createConnection() method
  host: 'localhost',
  port: 3306, // Your port, if not 3306
  user: 'root',// Your username
  password: 'G@lpaHV93*!!',  // Be sure to update with your own MySQL password!
  database: 'employee_db', //Verify which database you are using!!!
});

connection.connect((err) => { //call the connect() method on the connection object to connect to the MySQL database server
  if (err) throw err; //The connect() method accepts a callback function that has the err argument which provides the detailed error if any error occurred.
  console.log(`connected as id ${connection.threadId}`);
  console.log("ITS WORKING")
//   connection.end(); //To close a database connection gracefully, you call the end() method on the connection object. The end() method ensures that all remaining queries are always executed before the database connection closed.
});






