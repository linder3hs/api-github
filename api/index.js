const express = require("express");

const swaggerUi = require("swagger-ui-express");
const config = require("../config");
const github = require("./components/github/network");

const app = express();
const cors = require("cors");

const swaggerDoc = require("./swagger.json");

const options = {
  customCssUrl:
    "https://firebasestorage.googleapis.com/v0/b/recognizedios.appspot.com/o/style.css?alt=media&token=d5b95bc7-17d7-4437-969e-a6ad36b13839",
};

app.use(cors());

app.use("/api/github", github);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));

app.listen(config.api.port, () => {
  console.log(`Listen in port ${config.api.port}`);
});
