const { Employee } = require("../lib/employee");


describe(`Employee`, () => {
    describe(`Initialization`, () => {
        // Positive test
        it(`should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const name = `John Doe`;

            // Act
            const obj = new Employee(name, `123`, `email`, `Engineer`);

            // Assert
            expect(obj.name).toEqual(name);
        }),
        // Exception test
        it(`should throw an error if not provided a 'name' value`, () => {
            // Arrange
            const cb = () => new Employee();
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
            const obj = new Employee("name", id, "email", "Engineer");

            // Assert
            expect(obj.id).toEqual(id);
        }),
        it(`should throw an error if not provided a 'id' value`, () => {
            // Arrange
            const cb = () => new Employee("name");
            const err = new Error(
                `Expected parameter 'id' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'email' property set to the 'email' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const email = `sample@gmail.com`;

            // Act
            const obj = new Employee("name", "1", email, "Engineer");

            // Assert
            expect(obj.email).toEqual(email);
        }),
        it(`should throw an error if not provided a 'email' value`, () => {
            // Arrange
            const cb = () => new Employee("name", "1");
            const err = new Error(
                `Expected parameter 'email' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'role' property set to the 'role' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const role = `Manager`;

            // Act
            const obj = new Employee("name", "1", "email", role);

            // Assert
            expect(obj.role).toEqual(role);
        });
        it(`should throw an error if not provided a 'role' value`, () => {
            // Arrange
            const cb = () => new Employee("name", "1", "email");
            const err = new Error(
                `Expected parameter 'role' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        });
});
});