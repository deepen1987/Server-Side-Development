const lib = require("../lib");

describe("absolute", ()=> {
    it("should return a positive no. if input is positive", ()=> {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it("should return a positive no. if input is negative", ()=> {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it("should return a 0 if input is 0", ()=> {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });

});

describe("greet", () => {
    it("should return the name with a greeting", () => {
        const result = lib.greet("Deep");
        expect(result).toContain("Deep");
    });
});