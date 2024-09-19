import express from "express";
const app=express();
const port=3000;

app.get("/",(req, res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hi, I'm Manibhushan!</h1>");
}); 

app.get("/about",(req, res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>About Me</h1><p>I am a student of NIT patna.</p>");
}); 

app.get("/contact",(req, res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>Contact Me</h1><p>Email:wtcamanibhushan20@gmail.com</p>");
}); 


app.listen(port, () => {
   console.log(`server started on port ${port}`);
});