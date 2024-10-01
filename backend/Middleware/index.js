import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function brand(req, res, next) {
    console.log(req.body);
    req.bname = req.body["street"] +" "+ req.body["pet"];
    next();
}


app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(brand);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
    res.send(`<h1>Your brand name is:</h1>\n ${req.bname} `);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
