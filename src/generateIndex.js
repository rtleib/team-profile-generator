var html;

function generateManager(Manager) {
    return `
      <h2 class="Manager">${Manager.getRole}</h2>
      <p>
        Name: ${Manager.getName}
        Id: ${Manager.getId}
        Email: ${Manager.getEmail}
        Office Number: ${Manager.officeNumber}
      </p>
  `
  }
function generateIntern(Intern) {
    if(Intern.getRole() === "Intern"){
  return `
    <h2 class="intern">${Intern.getRole}</h2>
    <p>
      Name: ${Intern.getName}
      Id: ${Intern.getId}
      Email: ${Intern.getEmail}
      School: ${Intern.getSchool}
    </p>
  
  `
}
}
  function generateEngineer(Engineer) {
      if(Engineer.getRole() === "Engineer"){
    return `
        <h2 class="engineer">${Engineer.getRole}</h2>
        <p>
          Name: ${Engineer.getName}
          Id: ${Engineer.getId}
          Email: ${Engineer.getEmail}
          GitHub: ${Engineer.getGithub}
          </p>
  `
 }
}
  function generateIndex(team) {
    for(let i = 0; i < team.length; i++) {
      if(team[i].getRole() == "Engineer") {
        html += generateEngineer(team[i])
      }else if(team[i].getRole() == "Intern") {
        html += generateIntern(team[i])
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
          ${generateManager}
          ${generateEngineer}
          ${generateIntern}
        </div>
      </section>
  </body>
  </html>
  `
        }}}
  module.exports = generateIndex;