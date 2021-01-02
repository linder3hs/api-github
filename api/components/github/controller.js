const fetch = require("node-fetch");

const config = require("../../../config");

module.exports = function () {
  async function history() {
    const response = await fetch(config.api.url);
    return await response.json();
  }

  async function files(sha) {
    const response = await fetch(`${config.api.url}/${sha}`);
    return await response.json();
  }

  async function comments(sha) {
    const response = await fetch(`${config.api.url}/${sha}/comments`);
    return await response.json();
  }

  return {
    history,
    files,
    comments,
  };
};
