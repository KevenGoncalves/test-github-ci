const express = require("express");
const { HelloWorld } = require("./functions/functions");
const app = express();
const port = process.env.SERVER_PORT || 3030;

app.use(express.json());
app.listen(port, () =>
  console.log(`[SERVER] - Running on http://localhost:${port}`)
);

app.get("/", (req, res) => {
  return res.json({ message: HelloWorld() });
});
