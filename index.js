// Npm requirements
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Manager = require(`./lib/manager.js`);
const Engineer = require(`./lib/engineer.js`);
const Intern = require(`./lib/intern.js`);
let htmlContent = "";
// Employee list
let employeeList = [];
// Project Name
let projectName = ``;
// Class creation




// functions to ask for new employee info
function newMember(){
    inquirer.prompt([
        {
            type: `list`,
            message: `Would you like to add a new employee?`,
            name: `employeeType`,
            choices: [`Engineer`, `Intern`, `Team complete`]
    }]).then(function(answer){
        if (answer.employeeType === `Engineer`){
            newEngineer();
        } else if (answer.employeeType === `Intern`){
            newIntern();
        } else {
            teamComplete();
        }
    })
}

function newEngineer(){
inquirer.prompt([
    {
        type: `input`,
        message: `What is the engineer's name?`,
        name: `engineerName`},
    {
        type: `input`,
        message: `What is the engineer's id?`,
        name: `engineerId`},
    {
        type: `input`,
        message: `What is the engineer's email?`,
        name: `engineerEmail`},
    {
        type: `input`,
        message: `What is the engineer's github username?`,
        name: `engineerGithub`}
]).then(function(answer){
    let newEngineer = new Engineer.Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, `Engineer`, answer.engineerGithub);
    employeeList.push(newEngineer);
newMember();
});};

function newIntern(){
inquirer.prompt([
    {
        type: `input`,
        message: `What is the intern's name?`,
        name: `internName`},
    {
        type: `input`,
        message: `What is the intern's id?`,
        name: `internId`},
    {
        type: `input`,
        message: `What is the intern's email?`,
        name: `internEmail`},
    {
        type: `input`,
        message: `What is the intern's school?`,
        name: `internSchool`}
]).then(function(answer){
    let newIntern = new Intern.Intern(answer.internName, answer.internId, answer.internEmail, `Intern`, answer.internSchool);
    employeeList.push(newIntern);
newMember();
})}
function generateHtml() {
    htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${projectName}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  </head>
  <body style="background-color: rgb(199, 199, 199); color: rgb(0, 134, 134); font-size: 15; font-family: 'Signika Negative', sans-serif;">
    <header class = "page-header" style="padding-left: 3px; border-bottom: 1px solid rgb(0, 187, 187);">
        <h1>${projectName}  <small>Team Members</small></h1>
    </header>
    <main class="container-fluid" style="display:flex; flex-wrap: wrap;">`;
    for (let i = 0; i < employeeList.length; i++) { 
        htmlContent += `
        <section class="text-center" style="flex: 1; border: 1px solid rgb(0, 134, 134); padding: 3px;">
            <h3>${employeeList[i].name}</h3>
            <p>${employeeList[i].role}</p>
            <p>Employee ID: ${employeeList[i].id}</p>
            <p>Email: <a href = "mailto: ${employeeList[i].email}">${employeeList[i].email}</a></p>`;
        if (employeeList[i].role === `Manager`) {
         htmlContent += `
         <p>Office Number: ${employeeList[i].officeNumber}</p>`;
        } else if (employeeList[i].role === `Engineer`) {
            htmlContent += `
            <p>GitHub Profile: <a href = "https://github.com/${employeeList[i].github}" target = "_blank">${employeeList[i].github}</a></p>`;
        } else if (employeeList[i].role === `Intern`) {
            htmlContent += `
            <p>School: ${employeeList[i].school}</p>`;
        }
        htmlContent += `
        </section>`;
}
htmlContent += `
</main>
    </body>
</html>`;
};

function teamComplete(){
    console.log(employeeList);
    generateHtml()
fs.writeFile(`${projectName} Team.html`, htmlContent,
 function(err){
    if (err) throw err;
    console.log(`File created under ${projectName} Team.html`);
});

};
// Calls prompt for Project Name and Manager details
function start(){
inquirer.prompt([
    {
        type: `input`,
        message: `What is the project's name?`,
        name: `projectName`},
    {
   name: 'Manager',
   message: "What is the name of the team manager?",
   type: 'input'},
    {
    name: `id`,
    message: "What is the employee id of the team manager?",
     type: `input`},
    {
    name: `email`,
    message: "What is the email of the team manager?",
     type: `input`},
    {
    name: `officeNumber`,
    message: "What is the office number of the team manager?",
    type: `input`}
    ]).then(function(answer){
    // Create new manager object
    let teamManager = new Manager.Manager(answer.Manager, answer.id, answer.email, "Manager", answer.officeNumber);
    // Push new manager object to employeeList array
    employeeList.push(teamManager);
    // Save project name to variable
    projectName = answer.projectName;
    // Call newMember function to prompt for new employee or team complete
    newMember();
    })
};

start();

exports.start = start;
exports.newMember = newMember;
exports.newEngineer = newEngineer;
exports.newIntern = newIntern;
exports.teamComplete = teamComplete;