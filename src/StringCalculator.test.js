const add = require("./StringCalculator");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});
it("should return the number given", () => {
    expect(add("1")).toBe(1);
});
it("should return the sum of the two numbers", () => {
    expect(add("2,3")).toBe(5);
});