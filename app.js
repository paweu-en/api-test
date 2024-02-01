const express = require("express");
const app = express();
const shell = require("shelljs");

app.post("/api/webhook", (req, res) => {
  res.json({ message: "api webhook has been trigger..." });
  shell.cd("~/app");
  shell.exec("npm run build");
  shell.exec("pm2 reload all");
  shell.exec("pm2 ls");
});

app.listen(4321, () => {
  console.log("Listen on the port 4321...");
});
