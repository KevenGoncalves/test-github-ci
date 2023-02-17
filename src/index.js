const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 3030;

app.use(express.json());
app.listen(port, () =>
  console.log(`[SERVER] - Running on http://localhost:${port}`)
);

function HelloWorld() {
  return "Hello World";
}

function TestFunc() {
  return "Test Function";
}

app.get("/", (req, res) => {
  return res.json({ message: HelloWorld() });
});

module.exports = { HelloWorld, TestFunc };
