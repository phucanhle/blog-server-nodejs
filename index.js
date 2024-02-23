const express = require("express");
const app = express();
const connectToDatabase = require("./src/databases/connection");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;
const uri = process.env.URL;

const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/routers/");

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send({ msg: "Server is working." });
});
app.use("/api/v1/", router);

connectToDatabase(uri);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
