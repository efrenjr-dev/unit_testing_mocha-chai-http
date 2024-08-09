import express from "express";
const app = express();
var PORT = 5002;
import routes from "./app/routes.js";

app.use(express.json());

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

export default app;
