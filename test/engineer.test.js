const { Engineer } = require("../lib/engineer");

describe(`Engineer`, () => {
    describe(`Initialization`, () => {
        // Positive test
        it(`should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const name = `John Doe`;

            // Act
            const obj = new Engineer(name, `123`, `email`, `Engineer`, `github`);

            // Assert
            expect(obj.name).toEqual(name);
        }),
        // Exception test
        it(`should throw an error if not provided a 'name' value`, () => {
            // Arrange
            const cb = () => new Engineer();
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
            const obj = new Engineer("name", id, "email", "Engineer", `github`);

            // Assert
            expect(obj.id).toEqual(id);
        }),
        it(`should throw an error if not provided a 'id' value`, () => {
            // Arrange
            const cb = () => new Engineer("name");
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
            const obj = new Engineer("name", "1", email, "Engineer", `github`);

            // Assert
            expect(obj.email).toEqual(email);
        }),
        it(`should throw an error if not provided a 'email' value`, () => {
            // Arrange
            const cb = () => new Engineer("name", "1");
            const err = new Error(
                `Expected parameter 'email' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'github' property set to the 'github' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const github = `github`;

            // Act
            const obj = new Engineer("name", "1", "email", "Engineer", github);

            // Assert
            expect(obj.github).toEqual(github);
        }),
        it(`should throw an error if not provided a 'github' value`, () => {
            // Arrange
            const cb = () => new Engineer("name", "1", "email", "Engineer", "");
            const err = new Error(
                `Expected parameter 'github' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should throw an error if "github" provided is undefined`, () => {
            // Arrange
            const cb = () => new Engineer("name", "1", "email", "Engineer",);
            const err = new Error(
                `Expected parameter 'github' to be a non empty string`
            );
            // Assert
            expect(cb).toThrowError(err);
        }),
        it(`should create an object with a 'role' property set to the 'role' argument provided when called with the 'new' keyword`, () => {
            // Arrange
            const role = `Engineer`;

            // Act
            const obj = new Engineer("name", "1", "email", role, `github`);

            // Assert
            expect(obj.role).toEqual(role);
        }),
        it(`should throw an error if not provided a 'role' value`, () => {
            // Arrange
            const cb = () => new Engineer("name", "1", "email",);
            const err = new Error(
                `Expected parameter 'role' to be a non empty string`
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});
