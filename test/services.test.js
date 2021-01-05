const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);

const config = require("../config");

describe("github - api", function () {
  describe("GET history", function () {
    it("should get all history of commits", (done) => {
      chai
        .request(config.test.url)
        .get("/commits/history")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("GET files from commit", function () {
    it("should get file by commit id", (done) => {
      chai
        .request(config.test.url)
        .get("/commit/files/c075210a2f725b8afe2173aeca6f945becd03848")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("GET get comments from commit", function () {
    it("should get comments by commit id", (done) => {
      chai
        .request(config.test.url)
        .get("/commit/comments/c075210a2f725b8afe2173aeca6f945becd03848")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
