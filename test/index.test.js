const index = require("../index.js");
const start = index.start;
const newMember = index.newMember;
const newEngineer = index.newEngineer;
const newIntern = index.newIntern;
const teamComplete = index.teamComplete;

describe("start", () => {
   it("should be a function", () => {
      expect(typeof start).toBe("function");
   });
});

describe("newMember", () => {
    it("should be a function", () => {
        expect(typeof newMember).toBe("function");
    });
});

describe("newEngineer", () => {
    it("should be a function", () => {
        expect(typeof newEngineer).toBe("function");
    });
});

describe("newIntern", () => {
    it("should be a function", () => {
        expect(typeof newIntern).toBe("function");
    });
});

describe("teamComplete", () => {
    it("should be a function", () => {
        expect(typeof teamComplete).toBe("function");
    });
});