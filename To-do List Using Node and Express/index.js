import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res) =>{
    res.render("index.ejs",{
 
    });
});

app.post("/submit",(req, res) =>{
     res.render("index.ejs",{
       heading: req.body[title],
       content: req.body[story]
     }); 
});

port.listen(port,()=>{
   console.log(`server running on port ${port}.`);
});