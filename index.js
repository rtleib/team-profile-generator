const inquirer = require('inquirer');
const { Employee, Engineer, Intern, Manager } = require('./lib');
console.log(Employee);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the mangager's name",
    },
  ])
