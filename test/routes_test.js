import { expect, use } from "chai";
import chaiModule from "chai-http";
import app from "../server.js";
const chai = use(chaiModule);

describe("Test Currency API Suite", () => {
    it("Check if Post / currency is running", (done) => {
        chai.request
            .execute("http://localhost:5002")
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
});
