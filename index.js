const inquirer = require("inquirer");
const mysql = require("mysql2");
const figlet = require("figlet");
const chalk = require("chalk");
const cTable = require("console.table");

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("Employee Manger", {
        // font: 'Cursive',
        horizontalLayout: "full",
        verticalLayout: "full",
        width: 70,
        whitespaceBreak: true,
      })
    )
  );
  console.log("\n");
};

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employee_tracker_DB",
});

let exitTracker = chalk.redBright("Exit");

// init();
const runEmployeeTracker = async () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want to do?",
        name: "options",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View Departments",
          "View Roles",
          "View All Employees",
          "Update Employee Role",
          exitTracker,
        ],
      },
      {
        type: "input",
        message: "What is the name of your department?",
        name: "addDepartment",
        when: (answers) => {
          if (answers.options == "Add Department") {
            return true;
          } else {
            return false;
          }
        },
      },