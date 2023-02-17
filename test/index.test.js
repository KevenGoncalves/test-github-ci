const { TestFunc, HelloWorld } = require("../src/functions/functions");

describe("Testing app", () => {
  test("return the hello world", async () => {
    expect(HelloWorld()).toBe("Hello World");
  });

  test("Test Function", async () => {
    expect(TestFunc()).toBe("Test Function");
  });
});
