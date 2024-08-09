import { exchangeRates } from "../src/util.js";

export default function (app) {
    app.get("/currency", (req, res) => {
        res.status(200).send({ currencies: exchangeRates });
    });
    app.post("/currency", (req, res) => {
        if (!req.body.hasOwnProperty("name")) {
            return res.status(400).send({
                error: "Bad Request: missing required parameter NAME",
            });
        }
        if (typeof req.body.name !== "string") {
            return res.status(400).send({
                error: "Bad Request: NAME has to be a string",
            });
        }
        if (req.body.name.length < 1) {
            return res.status(400).send({
                error: "Bad Request: NAME should not be an empty string",
            });
        }
        if (!req.body.hasOwnProperty("ex")) {
            return res
                .status(400)
                .send({ error: "Bad Request: missing required parameter EX" });
        }
        if (typeof req.body.ex !== "object") {
            return res
                .status(400)
                .send({ error: "Bad Request: EX has to be an object" });
        }
        if (Object.keys(req.body.ex).length === 0) {
            return res.status(400).send({
                error: "Bad Request: EX should not be an empty object",
            });
        }
        if (!req.body.hasOwnProperty("alias")) {
            return res.status(400).send({
                error: "Bad Request: missing required parameter ALIAS",
            });
        }
        if (typeof req.body.alias !== "string    ") {
            return res
                .status(400)
                .send({ error: "Bad Request: ALIAS has to be a string" });
        }
        if (req.body.alias.length < 1) {
            return res.status(400).send({
                error: "Bad Request: ALIAS should not be an empty string",
            });
        }
    });
}

/*



error: "Bad Request : ALIAS has to be a string",

error: "Bad Request : ALIAS should not be an empty string",

      "Bad Request : fields are complete but ALIAS should not be duplicate",

"Bad Request : fields are incomplete",
*/
