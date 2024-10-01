import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    let type = "weekday";
    let adv = "it's time for work";
    if (day == 0 || day == 6) {
        type = "weekend";
        adv = "it's time for fun";
    }
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
