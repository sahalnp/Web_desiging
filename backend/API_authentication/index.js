import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "myr";
const yourPassword = "7410";
const yourAPIKey = "b97ca68-eb32-47c9-a7bb-d450d207ed9d";
const yourBearerToken = "271ab837-b108-4eae-96ea-de278621801a";

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "random");
        res.render("index.ejs", {
            content: JSON.stringify(result.data),
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/basicAuth", async (req, res) => {
    const result = await axios.get(API_URL + "all?pages=2", {
        auth: {
            username: yourUsername,
            password: yourPassword,
        },
    });
    try {
        res.render("index.ejs", {
            content: JSON.stringify(result.data),
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/apiKey", async (req, res) => {
    const result = await axios.get(API_URL + "filter", {
        params: {
            score: 7,
            apiKey: yourAPIKey,
        },
    });
    try {
        res.render("index.ejs", {
            content: JSON.stringify(result.data),
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});
const config = {
    headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.get("/bearerToken", async (req, res) => {
    const result = await axios.get(API_URL+"secrets/2", config);
    try {
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
