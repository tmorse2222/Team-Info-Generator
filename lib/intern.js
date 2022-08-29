const { Employee } = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
        if (this.school === "") {
            throw new Error("Expected parameter 'school' to be a non empty string");
        } else if (this.school === undefined) {
            throw new Error("Expected parameter 'school' to be a non empty string");
        };
    }
};

exports.Intern = Intern;