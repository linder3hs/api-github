module.exports = {
  api: {
    port: process.env.PORT || 9000,
    url:
      process.env.URL ||
      "https://api.github.com/repos/linder3hs/fulltime-force-git-commits/commits",
  },
  test: {
    url: process.env.TEST_URL || "http://localhost:9000/api/github",
  },
};
