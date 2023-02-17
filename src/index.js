function HelloWorld() {
  const variable = "Hello World";
  console.log(variable);
  return variable;
}

function TestFunc() {
  const variable = "Test Function";
  console.log(variable);

  return variable;
}

HelloWorld();
TestFunc();

module.exports = { HelloWorld, TestFunc };
