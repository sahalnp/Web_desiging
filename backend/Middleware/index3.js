import express from "express";
import bodyParser from 'body-parser';
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}))

app.get("/data", (req, res) => {
    res.send(`
        <form action="/data" method="POST">
            <input type="text" name="inputText" />
            <button type="submit">Submit</button>
        </form>
    `);
});
app.post("/data",(req,res)=>{
    const rs=req.body.inputText;
    console.log(rs);
    res.send(`you entered ${rs}`);
})
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});