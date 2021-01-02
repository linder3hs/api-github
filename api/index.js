const express = require("express");

const config = require("../config");

const github = require("./components/github/network");

const app = express();

app.use("/api/github", github);

app.listen(config.api.port, () => {
  console.log(`Listen in port ${config.api.port}`);
});
