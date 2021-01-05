const express = require("express");

const swaggerUi = require("swagger-ui-express");
const config = require("../config");
const github = require("./components/github/network");

const app = express();
const cors = require("cors");

const swaggerDoc = require("./swagger.json");

app.use(cors());

app.use("/api/github", github);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
  console.log(`Listen in port ${config.api.port}`);
});
