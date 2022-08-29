const { Manager } = require("../lib/manager.js");

describe(`Manager`, () => {
    describe(`Initialization`, () => {
        // Positive test
        it(`should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const name = `John Doe`;

            // Act
            const obj = new Manager(name, `123`, `email`, `Manager`, `room`);

            // Assert
            expect(obj.name).toEqual(name);
        }),
        // Exception test
        it(`should throw an error if not provided a 'name' value`, () => {
            // Arrange
            const cb = () => new Manager();
            const err = new Error(
                `Expected parameter 'name' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'id' property set to the 'id' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const id = `1`;

            // Act
            const obj = new Manager("name", id, "email", "Manager", `room`);

            // Assert
            expect(obj.id).toEqual(id);
        }),
        it(`should throw an error if not provided a 'id' value`, () => {
            // Arrange
            const cb = () => new Manager("name");
            const err = new Error(
                `Expected parameter 'id' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'email' property set to the 'email' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const email = `email`;

            // Act
            const obj = new Manager("name", "1", email, "Manager", `school`);

            // Assert
            expect(obj.email).toEqual(email);
        }),
        it(`should throw an error if not provided a 'email' value`, () => {
            // Arrange
            const cb = () => new Manager("name", "1");
            const err = new Error(
                `Expected parameter 'email' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'officeNumber' property set to the 'officeNumber' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const officeNumber = `officeNumber`;

            // Act
            const obj = new Manager("name", "1", "email", "Manager", officeNumber);

            // Assert
            expect(obj.officeNumber).toEqual(officeNumber);
        }),
        it(`should throw an error if not provided a 'officeNumber' value`, () => {
            // Arrange
            const cb = () => new Manager("name", "1", "email", "Manager");
            const err = new Error(
                `Expected parameter 'officeNumber' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should throw an error if 'officeNumber' is an empty string`, () => {
            // Arrange
            const cb = () => new Manager("name", "1", "email", "Manager", "");
            const err = new Error(
                `Expected parameter 'officeNumber' to be a non empty string`
            );
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'role' property set to the 'role' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const role = `Manager`;

            // Act
            const obj = new Manager("name", "1", "email", role, "room");

            // Assert
            expect(obj.role).toEqual(role);
        }),
        it(`should throw an error if not provided a 'role' value`, () => {
            // Arrange
            const cb = () => new Manager("name", "1", "email");
            const err = new Error(
                `Expected parameter 'role' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});