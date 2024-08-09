import { exchangeRates } from "../src/util.js";

export default function (app) {
    app.get("/currency", (req, res) => {
        res.status(200).send({ currencies: exchangeRates });
    });
}

/*

error: "Bad Request : missing required parameter NAME",

error: "Bad Request : NAME has to be a string",

error: "Bad Request : NAME should not be an empty string",

error: "Bad Request : missing required parameter EX",

error: "Bad Request : EX has to be an object",

error: "Bad Request : EX should not be an empty object",

error: "Bad Request : missing required parameter ALIAS",

error: "Bad Request : ALIAS has to be a string",

error: "Bad Request : ALIAS should not be an empty string",

      "Bad Request : fields are complete but ALIAS should not be duplicate",

"Bad Request : fields are incomplete",
*/
