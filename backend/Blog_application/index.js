import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let posts=[];

app.get("/",(req,res)=>{
    res.render("home.ejs",{posts})
})

app.get("/create",(req,res)=>{
    res.render("create.ejs");
})
app.post("/submit",(req,res)=>{
    const post={
        title:req.body.title,
        content:req.body.content
    }
    posts.push(post);
    res.redirect('/')
    console.log(posts)
})
app.get('/post/:id',(req,res)=>{
    const postId=req.params.Id;
    const post  = posts[postid];
    if(post){
        res.render("post.ejs",{
            post,postId
        })
    }
    else{
        res.send("page not found");
    }
})
app.get("/post/:id/edit",(req,res)=>{
    const postid=req.params.id;
    const post = posts[postid];
    if(post){
        res.render("edit.ejs",{
            post,
            postid
        })
    }
    else{
        res.send("page not found");
    }
})
app.post("/post/:id/edit",(req,res)=>{ //editing post 
    const postid=req.params.id;

    posts[postid].title=req.body.title;
    posts[postid].content=req.body.content;

    res.redirect(`/post/${postId}`);
})
app.post("/post/:id/delete",(req,res)=>{
    const postId=req.params.id;
    posts.splice(postId, 1);
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});