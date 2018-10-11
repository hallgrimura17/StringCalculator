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
it("should return the sum of multiple numbers", () => {
    expect(add("2,3,4")).toBe(9);
});
it("should return the sum of the two arguments", () => {
    expect(add("2", "7")).toBe(9);
});
it("should return the sum of the four arguments", () => {
    expect(add("2", "5","7", "9")).toBe(23);
});
it("should return the sum of numbers with , or \\n between them", () => {
    expect(add("2\n5,7,9")).toBe(23);
});
test("should throw an exception, listing all negative numbers recieved as input", () => {
    function addNegative() {
        add("2\n5,-7,9", "1, -5");
    }
    expect(addNegative).toThrowError("Negatives not allowed: -7,-5");
  });
it("should return the sum of all the numbers except for numbers higher than 1000", () => {
    expect(add("1001")).toBe(0);
});
it("should return the sum of the numbers with the optional delimiter", () => {
    expect(add("//;\n1;2;3")).toBe(6);
});
it("should return the sum of the numbers with the optional delimiter", () => {
    expect(add("//;\n1;2;3,4,4\n3")).toBe(17);
});
it("should return the sum of the numbers with the optional delimiter halli", () => {
    expect(add("//halli\n1halli2halli3,4,4\n3")).toBe(17);
});