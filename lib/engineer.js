const { Employee } = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
        if (this.github === undefined) {
            throw new Error(
                `Expected parameter 'github' to be a non empty string`
            );
        } else if (this.github === "") {
            throw new Error(
                `Expected parameter 'github' to be a non empty string`
            );
        }
    }
};

exports.Engineer = Engineer;