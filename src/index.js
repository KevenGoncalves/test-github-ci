function HelloWorld() {
  const variable = "Hello Worlds";
  console.log(variable);
  return variable;
}

function TestFunc() {
  const variable = "Test Function";
  console.log(variable);

  return variable;
}

module.exports = { HelloWorld, TestFunc };
