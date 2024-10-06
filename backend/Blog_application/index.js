// Initialize Express app
import express from "express";
import bodyParser from "body-parser";

// Initialize Express app
const app=express();
const port=3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Data storage
let posts=[];

app.get("/",(req,res)=>{
    res.render("home.ejs",{posts})
})

//creating homne page
app.get("/create",(req,res)=>{
    res.render("create.ejs");
})
//Submitting the blog tile and content
app.post("/submit",(req,res)=>{
    const post={
        title:req.body.title,
        content:req.body.content
    }
    posts.push(post);
    res.redirect('/')
    console.log(posts)
})
//showing the blog
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
// showing editing page
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
//Editing the blog title and content
app.post("/post/:id/edit",(req,res)=>{ 
    const postid=req.params.id;

    posts[postid].title=req.body.title;
    posts[postid].content=req.body.content;

    res.redirect(`/post/${postId}`);
})

//Delelting the blog
app.post("/post/:id/delete",(req,res)=>{
    const postId=req.params.id;
    posts.splice(postId, 1);
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});