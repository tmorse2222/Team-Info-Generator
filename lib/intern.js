const { Employee } = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }
};

exports.Intern = Intern;