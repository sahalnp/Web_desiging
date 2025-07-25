import axios from "axios";
import express from "express";

const port=3000;
const app=express();
app.use(express.static("public"));
app.get('/',async(req,res)=>{
    const result=await axios.get("https://secrets-api.appbrewery.com/random")
    try {
        res.render('index.ejs',{
            secret:result.data.secret,
            user:result.data.username
        })
    } catch (error) {
        console.log(error)
        res.status(404)
            
        }
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  