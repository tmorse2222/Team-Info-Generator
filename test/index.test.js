const inquirer = require("inquirer");
const start = require("../index.js");

describe("start", () => {
    it("should be an object", () => {
        expect(typeof start).toBe("object");
    });
});