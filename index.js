const inquirer = require('inquirer');
const { Employee, Engineer, Intern, Manager } = require('./lib');
console.log(Employee);
const team = [];

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
  .then((data) => {
      const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
      team.push(newManager);
      console.log(newManager)
      inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'Which member would you like to add?',
          choices: ['Engineer', 'Intern', 'None'],
        },
      ])
      .then((data) => {
        if (data.choice === 'Engineer') {
          createEngineer();
        } else if (data.choice === 'Intern') {
            createIntern();
        } else {
          writeToFile('index.html', html(team));
        }
      })
  })
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's id?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Git Hub username?",
        },
      ])
      .then((data) => {
          const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
          team.push(newEngineer);
          console.log(newEngineer)
          inquirer
          .prompt([
            {
              type: 'list',
              name: 'choice',
              message: 'Which member would you like to add?',
              choices: ['Engineer', 'Intern', 'None'],
            },
          ])
          .then((data) => {
            if (data.choice === 'Engineer') {
              createEngineer();
            } else if (data.choice === 'Intern') {
              createIntern();
            } else {
              writeToFile('index.html', html(team));
            }
          })
      })
      function createIntern() {
        inquirer
        .prompt([
          {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
          },
          {
              type: 'input',
              name: 'internId',
              message: "What is the intern's id?",
          },
          {
              type: 'input',
              name: 'internEmail',
              message: "What is the intern's email?",
          },
          {
              type: 'input',
              name: 'internSchool',
              message: "What school did the intern went to?",
          },
        ])
        .then((data) => {
            const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            team.push(newIntern);
            console.log(newIntern)
            inquirer
            .prompt([
              {
                type: 'list',
                name: 'choice',
                message: 'Which member would you like to add?',
                choices: ['Engineer', 'Intern', 'None'],
              },
            ])
            .then((data) => {
              if (data.choice === 'Engineer') {
                createEngineer();
              } else if (data.choice === 'Intern') {
                createIntern();
              } else {
                writeToFile('index.html', html(team));
              }
            })
        })
      }  
  }