const express = require("express");

const response = require("../../../network");
const Controller = require("./controller");

const router = express.Router();

router.get("/history", history);
router.get("/files/:sha", files);
router.get("/comments/:sha", comments);

async function history(req, res) {
  try {
    const body = await Controller().history();
    response.response(res, false, body);
  } catch (err) {
    response.response(res, true, err.toString(), 500);
  }
}

async function files(req, res) {
  try {
    const sha = req.params.sha;
    const body = await Controller().files(sha);
    response.response(res, false, body);
  } catch (err) {
    response.response(res, true, err, 500);
  }
}

async function comments(req, res) {
  try {
    const sha = req.params.sha;
    const body = await Controller().comments(sha);
    response.response(res, false, body);
  } catch (err) {
    response.response(res, true, err, 500);
  }
}

module.exports = router;
