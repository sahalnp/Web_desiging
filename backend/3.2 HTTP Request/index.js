import express from "express";
const app = express(); 
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h6>hello</h6>")
})  
app.post("/reg",(req,res)=>{
    res.sendStatus("201")
})
app.put("/about",(req,res)=>{
    res.sendStatus("200")
});
app.patch("/about",(req,res)=>{
    res.sendStatus("200")
});
app.delete("/about",(req,res)=>{
    res.sendStatus("200")
});
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
 