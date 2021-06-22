//You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?
//You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.

//SQL (STRUCTURED QUERY LANGUAGE) A query is a request for data.
//App requires these modules to function. 
const mysql = require('mysql');  //NPM package to connect to your MySQL database and perform queries.
const inquirer = require('inquirer'); //NPM package to interact with the user via the command-line.


const connection = mysql.createConnection({ //create a connection to the MySQL database by calling the createConnection() method
  host: 'localhost',
  port: 3306, // Your port, if not 3306
  user: 'root',// Your username
  password: 'G@lpaHV93*!!',  // Be sure to update with your own MySQL password!
  database: 'employee_db', //Verify which database you are using!!!
});

connection.connect((err) => { //call the connect() method on the connection object to connect to the MySQL database server
  if (err) throw err; //The connect() method accepts a callback function that has the err argument which provides the detailed error if any error occurred.
  // console.log(`connected as id ${connection.threadId}`);
  console.log("CONNECTED!!!!")
  init(); //when it connects, it calls this function to prompt the user for input
});


const init = () =>{
  inquirer
      .prompt({
          name: "userInput",
          type: "list",
          message: "What would you like to do?",
          choices: [
              "View All Departments",
              "View All Roles",
              "View All Employees",
              "Add Department",
              "Add Role",
              "Add Employee",
              "Update Employee Role",
              "Exit"
          ]
      })
      .then((answer) => { //switch statement to verify input and initialize proper function
        switch (answer.userInput) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break
            case 'Add Department':
                addDepartment();
                break
            case 'Add Role':
                addRole();
                break
            case 'Exit':
                connection.end(); //connection.end(); //To close a database connection gracefully, you call the end() method on the connection object. The end() method ensures that all remaining queries are always executed before the database connection closed.
                console.log("CONNECTION CLOSED!!!")
                break;
        }
    });
};

const viewAllDepartments = () => {
  // console.log("DOES REACH FUNCTION!!!")
  console.log(` \n`) //NEW LINE
  const query = "SELECT * FROM department"; //SELECT, (go get from the database) *(ALL) FROM (which table are you looking at?)
  connection.query(query, (err, result) => { //Querying Data in MySQL Database from Node.js 
    //connection.query = Query function runs this query command (SELECT * FROM department) we declared above to the database
    if (err) throw err;
    // console.log(result) returns a raw data packet from employee_DB database 
    console.log('VIEW ALL DEPARTMENTS')
    console.table(result); //Prints MySQL rows to the console. The console.table() method writes a table in the console view. The first parameter is required, and must be either an object, or an array, containing data to fill the table.
    init(); //calls init function to make sure USER doesn't want to see/verify any particular data before choosing to exit
  })
};

const viewAllRoles = () => {
  // console.log("DOES REACH FUNCTION!!!")
  console.log(` \n`) //NEW LINE
  const query = "SELECT * FROM role"; //SELECT, (go get from the database) *(ALL) FROM (which table are you looking at?) 
  connection.query(query, (err, result) => {   ////connection.query = runs this query command (SELECT * FROM role) we declared above
    if (err) throw err; 
    console.log('VIEW ALL ROLES')
    console.table(result);
    console.log('\n')
    init();
  })
};

const viewAllEmployees = () => {
  // console.log("DOES REACH FUNCTION!!!")
  console.log(` \n`) //NEW LINE
  const query = "SELECT * FROM employee"; //SELECT, (go get from the database) *(ALL) FROM (which table are you looking at?)
  connection.query(query, (err, result) => { ////connection.query = runs this query command (SELECT * FROM employee) we declared above
    if (err) throw err;
    console.log('VIEW ALL EMPLOYEES')
    console.table(result);
    console.log('\n')
    init();
  })
};

const addDepartment = () => {
    inquirer
    .prompt([
      {
          name: 'department',
          type: 'input',
          message: 'What is the name of the department you are creating?'
      }
  ]).then((answer) => {
    const query = "INSERT INTO department (name) VALUES (?)";
      connection.query(query, answer.department, (err, res) => {
              if (err) throw err;
              // console.log("FUNCTION WORKS AND INPUT VALUE GETS ADDED INTO employee_DB database")
              console.log('\n')
              console.log(`NEW DEPARTMENT WAS CREATED: ${(answer.department)}`)
              console.log('\n')

              init();
          })
  })
};


const addRole = () => {
  
  connection.query(`SELECT * FROM department`, (err, result) => {
    if (err) throw err;
    const departmentChoices = result.map(function (department) {
      return {
        value: department.id,
        name: department.name,
      };
    });

    
  inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "What is the name of the new role you are creating?"
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary that the new role makes?"
    },
    {
      name: "department",
      type: "list",
      message: "Which department is this new role in?",
      choices: departmentChoices
    },
  ]).then((answer) => {
    console.log("answer:", answer)
  const query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
    connection.query(query,[answer.title, answer.salary, answer.department], (err, res) => {
            if (err) throw err;
            // console.log("FUNCTION WORKS AND INPUT VALUE GETS ADDED INTO employee_DB database")
            // console.log(`NEW DEPARTMENT WAS CREATED: ${(answer.newDepartment)}`)
            init();
        })
})
});
};

