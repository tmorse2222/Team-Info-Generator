const fs = require(`fs`);
const inquirer = require(`inquirer`);

function Employee(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
};

class Manager extends Employee {
    constructor(name, id, email, role) {
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