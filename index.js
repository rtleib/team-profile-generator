const inquirer = require('inquirer');
const { Employee, Engineer, Intern, Manager } = require('./lib');
console.log(Employee);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the mangager's name?",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the mangager's id?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the mangager's email?",
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the mangager's office number?",
    },
  ])
