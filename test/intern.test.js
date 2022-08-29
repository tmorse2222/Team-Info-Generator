const { Intern } = require("../lib/Intern");

describe(`Intern`, () => {
    describe(`Initialization`, () => {
        // Positive test
        it(`should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const name = `John Doe`;

            // Act
            const obj = new Intern(name, `123`, `email`, `Intern`, `school`);

            // Assert
            expect(obj.name).toEqual(name);
        }),
        // Exception test
        it(`should throw an error if not provided a 'name' value`, () => {
            // Arrange
            const cb = () => new Intern();
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
            const obj = new Intern("name", id, "email", "Intern", `school`);

            // Assert
            expect(obj.id).toEqual(id);
        }),
        it(`should throw an error if not provided a 'id' value`, () => {
            // Arrange
            const cb = () => new Intern("name");
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
            const obj = new Intern("name", "1", email, "Intern", `school`);

            // Assert
            expect(obj.email).toEqual(email);
        }),
        it(`should throw an error if not provided a 'email' value`, () => {
            // Arrange
            const cb = () => new Intern("name", "1");
            const err = new Error(
                `Expected parameter 'email' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'school' property set to the 'school' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const school = `school`;

            // Act
            const obj = new Intern("name", "1", "email", "Intern", school);

            // Assert
            expect(obj.school).toEqual(school);
        }),
        it(`should throw an error if not provided a 'school' value`, () => {
            // Arrange
            const cb = () => new Intern("name", "1", "email", "Intern");
            const err = new Error(
                `Expected parameter 'school' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'role' property set to the 'role' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const role = `role`;

            // Act
            const obj = new Intern("name", "1", "email", role, `school`);

            // Assert
            expect(obj.role).toEqual(role);
        }),
        it(`should throw an error if not provided a 'role' value`, () => {
            // Arrange
            const cb = () => new Intern("name", "1", "email",);
            const err = new Error(
                `Expected parameter 'role' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});