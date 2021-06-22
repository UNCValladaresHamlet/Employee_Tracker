//You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?

//You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.
const mysql = require('mysql'); //App requires these modules to function. 
const inquirer = require('inquirer');


const connection = mysql.createConnection({ //create a connection to the MySQL database by calling the createConnection() method
  host: 'localhost',
  port: 3306, // Your port, if not 3306
  user: 'root',// Your username
  database: 'employee_db', //Verify which database you are using!!!
});

connection.connect((err) => { //call the connect() method on the connection object to connect to the MySQL database server
  if (err) throw err; //The connect() method accepts a callback function that has the err argument which provides the detailed error if any error occurred.
  // console.log(`connected as id ${connection.threadId}`);
  console.log("ITS WORKING")
  init(); //when it connects, it calls this function to prompt the user for input
});


const init = () =>{
  inquirer
      .prompt({
          name: "userInput",
          type: "list",
          message: "What would you like to do?",
          choices: [
              "View all departments",
              "View all roles",
              "View all employees",
              "Add a department",
              "Add a role",
              "Add an employee",
              "Update employee role",
              "Exit"
          ]
      })
      .then((answer) => {
        switch (answer.userInput) {
            case 'View all departments':
                viewDepartments();
                break;

            case 'Exit':
                connection.end(); //   connection.end(); //To close a database connection gracefully, you call the end() method on the connection object. The end() method ensures that all remaining queries are always executed before the database connection closed.
                console.log("CONNECTION CLOSED!!!")
                break;
        }
    });
};

const viewDepartments = () => {
  // console.log("DOES REACH FUNCTION!!!")
  // console.log(` \n`)
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log('VIEW ALL DEPARTMENTS')
    console.table(res);
    // console.log('\n')
    init();
  })
};


