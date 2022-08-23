// Npm requirements
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// Class creation
function Employee(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
};
class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
};
class Engineer extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);
        this.github = github;
    }
};
class Intern extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);
        this.school = school;
    }
};
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
    const manager = new Manager(answer.Manager, answer.id, answer.email, "Manager", answer.officeNumber);
    console.log(manager);
    })