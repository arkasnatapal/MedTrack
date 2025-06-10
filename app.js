const express =require('express')
const app =express();
const path =require('path')
const cookieparser=require('cookie-parser')
const port =process.env.PORT || 3000;
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/register',(req,res)=>{
    res.render("register");
})
app.get('/dashboard',(req,res)=>{
    res.render("dashboard");
})
app.get('/notifications',(req,res)=>{
    res.render("notifications");
})
app.get('/medicine',(req,res)=>{
    res.render("medicine");
})
app.get('/see-medicines',(req,res)=>{
    res.render("see-medicines")
})

app.listen(port,()=>{
    console.log(`App is Listening in port ${port}`);
})
