const exe = require("../exercise1");

describe("fizzbuzz", () => {
    it("should return FizzBuzz if input divisible by 3 and 5 both", () => {
        const result = exe.fizzBuzz(15);
        expect(result).toContain("FizzBuzz");
    });

    it("should return Fizz if input divisible by 3", () => {
        const result = exe.fizzBuzz(9);
        expect(result).toContain("Fizz");
    });

    it("should return Buzz if input divisible by 5", () => {
        const result = exe.fizzBuzz(10);
        expect(result).toContain("Buzz");
    });

    it("should return input if input not divisible by 3 or 5", () => {
        const result = exe.fizzBuzz(22);
        expect(result).toBe(22);
    });

    it("should throw exception if input not a number", () => {
        expect( () => {exe.fizzBuzz("22")}).toThrow();
        expect( () => {exe.fizzBuzz(null)}).toThrow();
        expect( () => {exe.fizzBuzz(undefined)}).toThrow();
        expect( () => {exe.fizzBuzz({})}).toThrow();
    });
});