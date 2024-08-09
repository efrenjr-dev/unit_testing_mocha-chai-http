import { expect, use } from "chai";
import chaiModule from "chai-http";
import app from "../server.js";
const chai = use(chaiModule);

describe("Test Currency API Suite", () => {
    it("Check if Post /currency is running", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "sar",
                name: "Saudi Arabian Riyal",
                ex: {
                    peso: 13.43,
                    usd: 0.27,
                    yen: 30.33,
                    yuan: 1.7,
                },
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.not.equal(undefined);
                done();
            });
    });

    it("Check if Post /currency returns status 400 if name is missing", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "sar",
                ex: {
                    peso: 13.43,
                    usd: 0.27,
                    yen: 30.33,
                    yuan: 1.7,
                },
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });

    it("Check if Post / currency return status 400 if name is not a string", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "sar",
                name: false,
                ex: {
                    peso: 13.43,
                    usd: 0.27,
                    yen: 30.33,
                    yuan: 1.7,
                },
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });

    it("Check if Post /currency returns status 400 if name is an empty string", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "sar",
                name: "",
                ex: {
                    peso: 13.43,
                    usd: 0.27,
                    yen: 30.33,
                    yuan: 1.7,
                },
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });
    it("Check if Post /currency returns status 400 if ex is missing", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "sar",
                name: "Saudi Arabian Riyal",
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });
    it("Check if Post /currency returns status 400 if ex is not an object", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "sar",
                name: "Saudi Arabian Riyal",
                ex: false,
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });
    it("Check if Post /currency returns status 400 if ex is an empty object", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "sar",
                name: "Saudi Arabian Riyal",
                ex: {},
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });
    it("Check if Post /currency returns status 400 if alias is missing", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                name: "Saudi Arabian Riyal",
                ex: {
                    peso: 13.43,
                    usd: 0.27,
                    yen: 30.33,
                    yuan: 1.7,
                },
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });
    it("Check if Post /currency returns status 400 if alias is not a string", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: false,
                name: "Saudi Arabian Riyal",
                ex: {
                    peso: 13.43,
                    usd: 0.27,
                    yen: 30.33,
                    yuan: 1.7,
                },
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });
    it("Check if Post /currency returns status 400 if all fields are complete but alias is duplicated", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "yen",
                name: "Japanese Yen",
                ex: {
                    peso: 0.47,
                    usd: 0.0092,
                    won: 10.93,
                    yuan: 0.065,
                },
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(400);
                done();
            });
    });
    it("Check if Post /currency returns status 200 if all fields are complete and there is no duplicate", (done) => {
        chai.request
            .execute(app)
            .post("/currency")
            .type("json")
            .send({
                alias: "sar",
                name: "Saudi Arabian Riyal",
                ex: {
                    peso: 13.43,
                    usd: 0.27,
                    yen: 30.33,
                    yuan: 1.7,
                },
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(200);
                done();
            });
    });
});
/*
"alias": "sar",
"name": "Saudi Arabian Riyal",
"ex": {
    "peso": 13.43,
    "usd": 0.27,
    "yen": 30.33,
    "yuan": 1.7
}
*/
/*

it("Check if Post /currency returns status 400 if name is missing", (done) => {

    it("Check if Post /currency returns status 400 if name is not a string", (done) => {
  
    it("Check if Post /currency returns status 400 if name is an empty string", (done) => {
  
    it("Check if Post /currency returns status 400 if ex is missing", (done) => {
  
    it("Check if Post /currency returns status 400 if ex is not an object", (done) => {
  
    it("Check if Post /currency returns status 400 if ex is an empty object", (done) => {
  
    it("Check if Post /currency returns status 400 if alias is missing", (done) => {
  
    it("Check if Post /currency returns status 400 if alias is not a string", (done) => {
  
    it("Check if Post /currency returns status 400 if alias is an empty string", (done) => {
  
    it("Check if Post /currency returns status 400 if all fields are complete but there is a duplicate alias", (done) => {
  
    it("Check if Post /currency returns status 200 if all fields are complete and there is no duplicate", (done) => {
  
*/
