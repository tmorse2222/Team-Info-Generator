// Npm requirements
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// Employee list
let employeeList = [];
// Class creation
class Employee {
    constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
}};
class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
};
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    }
};
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }
};
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
        message: `What is the engineer's github?`,
        name: `engineerGithub`}
]).then(function(answer){
    let newEngineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, `Engineer`, answer.engineerGithub);
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
    let newIntern = new Intern(answer.internName, answer.internId, answer.internEmail, `Intern`, answer.internSchool);
    employeeList.push(newIntern);
newMember();
})}

function teamComplete(){
    console.log(employeeList);
fs.writeFile(`GoTeam.html`, `<!DOCTYPE html>`, function(err){
    if (err) throw err;
    console.log(`File created`);
});
}

// Prompt for manager details
inquirer.prompt([
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
    let teamManager = new Manager(answer.Manager, answer.id, answer.email, "Manager", answer.officeNumber);
    // Push new manager object to employeeList array
    employeeList.push(teamManager);
    // Call newMember function to prompt for new employee
    newMember();
    })

    