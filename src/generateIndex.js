// var html;
const generateIndex = team => {
  const generateManager= Manager =>{
      return `
      <div>
      <h2 class=manager>Manager</h2>
      <p>
        Name: ${Manager.name} </br>
        Id: ${Manager.id} </br>
        Email: ${Manager.email} </br>
        Office Number: ${Manager.officeNumber} </br>
      </p>
      </div>
      `;
  };
  const generateIntern = Intern => {
      return `
      <div>
      <h2 class=intern>Intern</h2>
      <p>
        Name: ${Intern.name} </br>
        Id: ${Intern.id} </br>
        Email: ${Intern.email} </br>
        School: ${Intern.school} </br>
      </p>
      </div>
      `;
  };
    const generateEngineer = Engineer => {
      return `
      <div>
      <h2 class=engineer>Role</h2>
      <p>
        Name: ${Engineer.name} </br>
        Id: ${Engineer.id} </br>
        Email: ${Engineer.email} </br>
        GitHub: ${Engineer.github} </br>
      </p>
      </div>
      `;
  };

  var html = [];

  html.push(team
    .filter(employee => employee.getRole() === "manager")
    .map(manager => generateManager(manager))
    .join("")
  );
  html.push(team
      .filter(employee => employee.getRole() === "engineer")
      .map(engineer => generateEngineer(engineer))
      .join("")
  );
  html.push(team
      .filter(employee => employee.getRole() === "intern")
      .map(intern => generateIntern(intern))
      .join("")
  );

  return html.join("");
}


module.exports = team => {
  const thisTeam = generateIndex(team);
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/css/style.css" />"
    <title>Team Profile Portfolio</title>
  </head>
  <body>
    <header>
      <div">
        <h1 class=header>Team Profile Portfolio</h1>
      </div>
    </header>
    <section>
        <div>
          ${generateIndex(team)}
        </div>
    </section>
  </body>
  </html>
  `;
};