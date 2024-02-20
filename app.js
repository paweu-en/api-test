const express = require("express");
const app = express();
const rebuildRoute = require("./routes/rebuildRoute");
require("dotenv").config();

app.use(rebuildRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listen on the port ${process.env.PORT}...`);
});
