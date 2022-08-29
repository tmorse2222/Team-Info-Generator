class Employee {
    constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    if (this.name === undefined) {
        throw new Error(`Expected parameter 'name' to be a non empty string`);
    } else if (this.id === undefined) {
        throw new Error(`Expected parameter 'id' to be a non empty string`);
    } else if (this.email === undefined) {
        throw new Error(`Expected parameter 'email' to be a non empty string`);
    } else if (this.role === undefined) {
        throw new Error(`Expected parameter 'role' to be a non empty string`);
    } else if (this.name === "") {
        throw new Error(`Expected parameter 'name' to be a non empty string`);
    } else if (this.id === "") {
        throw new Error(`Expected parameter 'id' to be a non empty string`);
    } else if (this.email === "") {
        throw new Error(`Expected parameter 'email' to be a non empty string`);
    } else if (this.role === "") {
        throw new Error(`Expected parameter 'role' to be a non empty string`);
    };
}};

exports.Employee = Employee;