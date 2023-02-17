const { TestFunc, HelloWorld } = require("../src/index");

describe("Testing app", () => {
  test("return the hello world", () => {
    expect(HelloWorld()).toBe("Hello World");
  });

  test("Test Func", () => {
    expect(TestFunc()).toBe("Test Func");
  });
});
