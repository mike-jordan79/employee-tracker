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
      {
        type: "input",
        message: "What is the title of the role?",
        name: "roleTitle",
        when: (answers) => {
          if (answers.options == "Add Role") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the salary of the role?",
        name: "roleSalary",
        when: (answers) => {
          if (answers.options == "Add Role") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "list",
        message: "What is the Department of the role?",
        name: "roleDepartmentId",
        choices: async (answers) => {
          const [rows, field] = await connection
            .promise()
            .query("SELECT name FROM department");
          return rows;
        },
        when: (answers) => {
          if (answers.options == "Add Role") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the first name of the employee?",
        name: "employeeFirstName",
        when: (answers) => {
          if (answers.options == "Add Employee") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "employeeLastName",
        when: (answers) => {
          if (answers.options == "Add Employee") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "list",
        message: "What is the role of the employee",
        name: "roleId",
        choices: async (answers) => {
          const [rows, field] = await connection
            .promise()
            .query(`SELECT title FROM role`);
          const roleArr = [];
          rows.forEach((item) => {
            return roleArr.push(item.title);
          });
          return roleArr;
        },
        when: (answers) => {
          if (answers.options == "Add Employee") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "list",
        message: "Who is the Manager of the employee",
        name: "employeeManager",
        choices: async (answers) => {
          let query1 = `SELECT concat(first_name,' ',last_name) AS manager FROM employee`;
          let query2 = `SELECT concat(first_name,' ',last_name) AS manager FROM employee WHERE manager_id IS NULL`;

          const [rows, field] = await connection.promise().query(query1);
          const managerArray = [];
          rows.forEach((item) => {
            return managerArray.push(item.manager);
          });
          return managerArray;
        },
        when: (answers) => {
          if (answers.options == "Add Employee") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "list",
        message: "Which employee to update with new role?",
        name: "updateEmployeeRole",
        choices: async (answers) => {
          const [rows, field] = await connection
            .promise()
            .query(
              `SELECT concat(first_name,' ',last_name) AS currentEmployee FROM employee `
            );
          const employeeArray = [];
          rows.forEach((item) => {
            return employeeArray.push(item.currentEmployee);
          });
          return employeeArray;
        },
        when: (answers) => {
          if (answers.options == "Update Employee Role") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "list",
        message: "What is the new employee role?",
        name: "updatedRoleId",
        choices: async (answers) => {
          const [rows, field] = await connection
            .promise()
            .query(`SELECT title FROM role`);
          const roleArr = [];
          rows.forEach((item) => {
            return roleArr.push(item.title);
          });
          return roleArr;
        },
        when: (answers) => {
          if (answers.options == "Update Employee Role") {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      switch (answers.options) {
        case "Add Department":
          connection.query(
            `INSERT INTO department (name) VALUES ('${answers.addDepartment}')`,
            function (err, results, fields) {
              restart();
            }
          );
          // restart()
          break;

        case "Add Role":
          // code here
          connection
            .promise()
            .query(
              `INSERT INTO role (title,salary,department_id) VALUES('${answers.roleTitle}','${answers.roleSalary}',(SELECT id FROM department WHERE name='${answers.roleDepartmentId}'))`
            )
            .then(([rows, field]) => {
              console.log("Role Added!!");
              restart();
            })
            .catch((err) => {
              console.log(err);
            });
          break;

        case "Add Employee":
          // code here
          const managerName = answers.employeeManager.split(" ");

          let myQuery = `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES('${answers.employeeFirstName}','${answers.employeeLastName}',(SELECT id FROM role WHERE title='${answers.roleId}'),(SELECT id FROM employee emply WHERE emply.first_name='${managerName[0]}' AND emply.last_name='${managerName[1]}'))`;

          connection.query(myQuery, function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log("Employee Added!!");
            restart();
          });
          break;

        case "View Departments":
          connection
            .promise()
            .query("SELECT * FROM department")
            .then(([rows, fields]) => {
              let resultsTbl = cTable.getTable(rows);
              console.log(`\n${resultsTbl}`);
              restart();
            })
            .catch((err) => {
              console.log(err);
            })
          //restart()
          break;

        case "View Roles":
          // code here
          connection.query(
            "SELECT * FROM role",
            function (err, results, fields) {
              let resultsTbl = cTable.getTable(results);
              console.log(`\n${resultsTbl}`);
              restart();
            }
          );
          // restart()
          break;

        case "View All Employees":
          // code here
          let query1 = "SELECT * FROM employee";
          let query2 = `SELECT 
                                    emp.id,
                                    emp.first_name,
                                    emp.last_name,
                                    rol.title,
                                    dept.name,
                                    rol.salary,
                                    CONCAT(empy.first_name, ' ', empy.last_name) Manager
                                FROM
                                    employee emp
                                        LEFT JOIN
                                    employee empy ON emp.manager_id = empy.id
                                        JOIN
                                    role rol ON emp.role_id = rol.id
                                        JOIN
                                    department dept ON dept.id = rol.department_id
                                GROUP BY emp.id`;
          connection.query(query2, function (err, results, fields) {
            let resultsTbl = cTable.getTable(results);
            console.log(`\n${resultsTbl}`);
            restart();
          });
          break;

        case "Update Employee Role":
          // code here
          console.log("Update Employee: ", answers.updateEmployeeRole);
          console.log("New Role: ", answers.updatedRoleId);
          const emply = answers.updateEmployeeRole.split(" ");
          connection.query(
            `UPDATE employee SET role_id=(SELECT id FROM role WHERE title='${answers.updatedRoleId}' ) WHERE first_name='${emply[0]}' AND last_name='${emply[1]}'`,
            function (err, results, fields) {
              console.log("Employee Role Updated!!");
              restart();
            }
          );
          break;

        case exitTracker:
          // code here
          console.log("Bye!!");
          process.exit();

        default:
          break;
      }
    });
};

function restart() {
  runEmployeeTracker();
}

runEmployeeTracker();
