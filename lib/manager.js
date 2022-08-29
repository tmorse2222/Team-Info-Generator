const { Employee } = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
        if (this.officeNumber === undefined) {
            throw new Error("Expected parameter 'officeNumber' to be a non empty string");
        } else if (this.officeNumber === "") {
            throw new Error("Expected parameter 'officeNumber' to be a non empty string");
        };
    }
};

exports.Manager = Manager;