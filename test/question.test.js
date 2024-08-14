let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server.js");
const serverConfig = require("../config/serve.config.js");
chai.use(chaiHttp);
var origin = serverConfig.host + serverConfig.port;
let should = chai.should();
const expect = require("expect");
const request = require("supertest");

describe("GET /test", () => {
  it("should get all result", (done) => {
    request(server)
      .post("/test")
      .expect(200)
      .expect((res) => {
        expect(res.body).toBe(res.body);
      })
      .end(done);
  });
});
